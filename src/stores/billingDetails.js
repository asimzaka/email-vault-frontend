import { defineStore } from 'pinia';
import { validateFields } from '@/utils';
import { useCreateAccount } from "@/stores/signUp";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const validationSchema = {
    cardName: [
        { type: 'required', label: 'Name' },
        { type: 'minLength', value: 3, label: 'Card name' },
        { type: 'maxLength', value: 30, label: 'Card name' },
    ],
    cardNumber: [
        { type: 'required', label: 'Card number' },
        { type: 'minLength', value: 16, label: 'Card number' },
        { type: 'maxLength', value: 16, label: 'Card number' },
        
    ],
    expirationDate: [
        { type: 'required', label: 'Card date ' },
        { type: 'expiry', label: 'Card date ' },
    ],
    cvv: [
        { type: 'required', label: 'CVV' },
        { type: 'minLength', value: 3, label: 'Card cvv' },
        { type: 'maxLength', value: 3, label: 'Card cvv' },
    ],

};

export const useBillingDetails = defineStore('billingDetails', {
    state: () => ({
        isLoading: false,
        cardName: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        cardType: "",
        errors: {},
        moveToVerifyEmail: false,
    }),
    actions: {
        detectCardType() {
            const number = this.cardNumber;
            if (/^4/.test(number)) this.cardType = "Visa";
            else if (/^5[1-5]/.test(number)) this.cardType = "MasterCard";
            else if (/^3[47]/.test(number)) this.cardType = "American Express";
            else if (/^6(?:011|5)/.test(number)) this.cardType = "Discover";
            else this.cardType = "";
        },
        validateField(field) {
            const formData = {
                cardName: this.cardName,
                cardNumber: this.cardNumber.replace(/\s+/g, ''),
                expirationDate: this.expirationDate,
                cvv: this.cvv,
                cardType: this.cardType,
            };
            const fieldErrors = validateFields(formData, validationSchema, field);
            this.errors[field] = fieldErrors[field];
        },
        validateForm() {
            const formData = {
                cardName: this.cardName,
                cardNumber: this.cardNumber.replace(/\s+/g, ''),
                expirationDate: this.expirationDate,
                cvv: this.cvv,
                cardType: this.cardType,
            };

            this.errors = validateFields(formData, validationSchema);
            return Object.keys(this.errors).length === 0;
        },
        async handleSignUp() {
            const accountStore = useCreateAccount();
            this.isLoading = true;
            this.errors = {};

            // Validate both stores
            const isAccountValid = accountStore.validateForm();
            const isBillingValid = this.validateForm();
            if (!isAccountValid || !isBillingValid) {
                this.isLoading = false;
                return;
            }

            const {firstName, lastName, companyName, email, password, referralCode } = accountStore.$state;                 
            // Prepare data and send request
            try {
                let data = JSON.stringify({
                    firstName,
                    lastName,
                    companyName,
                    email,
                    password,
                    referralCode,
                    nameOnCard: this.cardName,
                    cardNumber: this.cardNumber,
                    expirationDate: this.expirationDate,
                    cvv: this.cvv,
                });
            
                const response = await axios.post(
                  `${baseURL}/api/register`,
                  data,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );
                console.log('response:', response);
                if (response.status === 201) {        
                  this.moveToVerifyEmail = true;
                }else{
                  this.errors.general = 'Signup failed. Please try again.';
                }
              } catch (error) {
                console.error("Signup error:", error);
                this.errors.general = 'Signup failed. Please try again.';
              } finally {
                this.isLoading = false;
              }            
        },
    },

})