export const validateFields = (formData, validationSchema, field = null) => {
  const errors = {}

  // Determine fields to validate
  const fieldsToValidate = field
    ? { [field]: validationSchema[field] }
    : validationSchema

  for (const [fieldName, rules] of Object.entries(fieldsToValidate)) {
    const value = formData[fieldName]
    for (const rule of rules) {
      switch (rule.type) {
        case 'required':
          if (!value) {
            errors[fieldName] = `${rule.label || 'This field'} is required.`
          }
          break

        case 'minLength':
          if (value && value.length < rule.value) {
            errors[fieldName] =
              `${rule.label || 'This field'} must be at least ${rule.value} characters.`
          }
          break

        case 'maxLength':
          if (value && value.length > rule.value) {
            errors[fieldName] =
              `${rule.label || 'This field'} must be no more than ${rule.value} characters.`
          }
          break

        case 'email': {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (value && !emailRegex.test(value)) {
            errors[fieldName] = 'Enter a valid email address.'
          }
          break
        }

        case 'match': {
          const matchValue = formData[rule.field]
          if (value !== matchValue) {
            errors[fieldName] =
              `${rule.label || 'This field'} must match ${rule.fieldLabel || rule.field}.`
          }
          break
        }

        case 'boolean':
          if (!value) {
            errors[fieldName] = `${rule.label || 'This field'} must be checked.`
          }
          break

        case 'expiry': {
          const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
          if (!regex.test(value)) {
            errors[fieldName] =
              `${rule.label || 'This field'} 'Use MM/YY. Invalid date format.'`
          }

          const [month, year] = value.split('/').map(Number)
          const now = new Date()
          const currentMonth = now.getMonth() + 1 // getMonth() returns 0-11
          const currentYear = now.getFullYear() % 100 // Get last two digits of the year

          if (
            year < currentYear ||
            (year === currentYear && month < currentMonth)
          ) {
            errors[fieldName] = `${rule.label || 'This field'} 'has expired.'`
          }
          break
        }

        case 'passwordStrength': {
          const checks = {
            isMinLength: value.length >= 8,
            hasUppercase: /[A-Z]/.test(value),
            hasLowercase: /[a-z]/.test(value),
            hasNumber: /[0-9]/.test(value),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
          }

          const failedChecks = []
          if (!checks.isMinLength) failedChecks.push('at least 8 characters')
          if (!checks.hasUppercase) failedChecks.push('an uppercase letter')
          if (!checks.hasLowercase) failedChecks.push('a lowercase letter')
          if (!checks.hasNumber) failedChecks.push('a number')
          if (!checks.hasSpecialChar) failedChecks.push('a special character')

          if (failedChecks.length > 0) {
            errors[fieldName] =
              `Password must include ${failedChecks.join(', ')}.`
          }
          break
        }

        default:
          break
      }

      // Stop further checks if an error is found for this field
      if (errors[fieldName]) break
    }
  }

  return errors
}
