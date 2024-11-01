<script setup>
import CustomButton from "@/components/CustomButton.vue";

defineOptions({
  name: "ModalLayout",
});

const modalProps = defineProps({
  privacyPolicy: {
    type: Boolean,
    default: false,
  },
  handleModalState: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <modal class="modal">
        <modal-header class="modal-header">
          <span> Terms and Conditions </span>
        </modal-header>
        <modal-body class="modal-body">
          <modal-content class="modal-content custom-scrollbar">
            <modal-content-heading
              class="modal-content-heading"
              v-if="modalProps.privacyPolicy"
            >
              Version 1.0
            </modal-content-heading>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Massa elementum congue
              vestibulum rhoncus convallis. Nunc pharetra libero vel egestas
              sapien. Semper malesuada nunc lobortis volutpat netus convallis
              ornare risus sed. Lorem at tristique parturient integer
              scelerisque. Integer auctor adipiscing sit viverra leo phasellus
              nulla tempor lectus. Volutpat nam sit vel aliquet tristique cum
              urna vitae. Nunc massa scelerisque viverra neque convallis egestas
              Non risus tincidunt adipiscing non cursus consectetur convallis eu
              elementum. Tincidunt faucibus turpis vel sed duis integer
              volutpat. Praesent facilisis amet congue ultrices congue dictumst
              justo in. Quisque fermentum id aliquet erat ipsum faucibus a.
              Sodales sagittis aenean gravida adipiscing scelerisque curabitur
              odio id sagittis. Mauris ac morbi lacus suspendisse justo
              parturient facilisis at. Suspendisse eget dictum nullam viverra
              elementum. In convallis ut sed velit nunc scelerisque. Montes
              vivamus scelerisque platea eu quis quis. Vulputate urna dui duis
              purus. Neque vitae habitant feugiat imperdiet mattis sit nunc sit.
              Sed sit pulvinar feugiat dignissim. Risus erat platea quam est
              ullamcorper sit nunc tortor vel. A amet semper faucibus tortor
              urna rhoncus pulvinar blandit. Sed lectus mattis fermentum luctus
              lorem tempus suscipit sed nibh. Quisque nulla est enim ullamcorper
              viverra commodo. Quis malesuada pellentesque tincidunt morbi.
            </p>
          </modal-content>
        </modal-body>
        <modal-footer class="modal-footer">
          <CustomButton @click="modalProps.handleModalState" >OK</CustomButton>
        </modal-footer>
      </modal>
    </div>
  </div>
</template>

<style scoped>
/* This is the Custom Scroll bar  bcz react perfect scroll bar is causing issues */

.custom-scrollbar {
  overflow: hidden; /* Hide scrollbar by default */
  transition: overflow 0.5s ease; /* Transition for overflow */
  scroll-behavior: smooth;
}

.custom-scrollbar:hover {
  overflow: auto; /* Show scrollbar on hover */
}

.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
  width: 8px;
  border-radius: 10px;
  opacity: 0; /* Start with scrollbar invisible */
  transition: opacity 0.5s ease; /* Transition for scrollbar opacity */
}

.custom-scrollbar:hover::-webkit-scrollbar {
  opacity: 1; /* Show scrollbar on hover */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #571158;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: inherit;
  border-radius: 10px;
  padding: 2px;
  background-color: #d9d9d9;
}
.modal-wrapper {
  width: 100%;
  min-height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: hidden;
}
.modal-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal {
  display: block;
  width: 55%;
  height: 60%;
  background-color: #f9f9fb;
  border-radius: 10px;
  border: 1px solid #bebebe;
}

.modal-header {
  display: block;
  width: 100%;
  padding: 18px 24px;
  padding-bottom: 12px;
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  border-bottom: 1px solid #ededed;
}

.modal-body {
  padding: 18px 24px;
  width: 100%;
  display: block;
  height: 80%;
}

.modal-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 12px;
  border: 1px solid #bebebe;
  border-radius: 10px;
  gap: 14px;
}
.modal-content p {
  margin: 0px;
  font-size: clamp(12px, 2vw, 16px);
  text-align: justify;
}

.modal-footer {
  display: flex;
  width: 100%;
  padding: 0px 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ededed;
  justify-content: flex-end;
}

.modal-footer button {
  min-width: 100px;
  max-width: 100px;
}
.modal-content-heading {
  display: block;
  font-size: clamp(12px, 2vw, 16px);
  font-weight: 700;
  letter-spacing: 0.30000001192092896px;
}
</style>
