<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      @submit="onSubmitForgotPassword"
      id="kt_login_password_reset_form"
      :validation-schema="forgotPassword"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Reset Password </h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-semobold fs-4">
          Enter your Username and Email to reset your password.
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-label fw-bold text-gray-900 fs-6">Username</label>
        <Field
          class="form-control form-control-solid"
          type="username"
          placeholder=""
          name="username"
          autocomplete="off" 
          v-model="username"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="username" />
          </div>
        </div>
      </div> 

      <div class="fv-row mb-10">
        <label class="form-label fw-bold text-gray-900 fs-6">Email</label>
        <Field
          class="form-control form-control-solid"
          type="email"
          placeholder=""
          name="email"
          autocomplete="off" 
          v-model="email"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>

      <div class="fv-row mb-10">
        <label class="form-label fw-bold text-gray-900 fs-6">New Password</label>
        <Field
          class="form-control form-control-solid"
          type="newpassword"
          placeholder=""
          name="newpassword"
          autocomplete="off" 
          v-model="newpassword"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="newpassword" />
          </div>
        </div>
      </div> 

      <div class="fv-row mb-10">
        <label class="form-label fw-bold text-gray-900 fs-6">Confirm Your Password</label>
        <Field
          class="form-control form-control-solid"
          type="confirmyourpassword"
          placeholder=""
          name="confirmyourpassword"
          autocomplete="off" 
          v-model="confirmyourpassword"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="confirmyourpassword" />
          </div>
        </div>
      </div> 
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex flex-wrap justify-content-center pb-lg-0">
        <button
          type="submit"
          ref="submitButton"
          id="kt_password_reset_submit"
          class="btn btn-lg btn-primary fw-bold me-4"
        >
          <span class="indicator-label"> Submit </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>

        <router-link to="/sign-up" class="btn btn-lg btn-light-primary fw-bold"
          >Cancel</router-link
        >
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  data() {
    return {
      username: "",
      email: "",
      newpassword: "",
      confirmyourpassword: "",
    };
  },

  setup() {
    const username = ref('');
    const email = ref('');
    const newpassword = ref('');
    const confirmyourpassword = ref('');

    const store = useAuthStore();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const forgotPassword = Yup.object().shape({
      confirmyourpassword: Yup.string().min(4).required().label("Confirm Your Password"),
      newpassword: Yup.string().min(4).required().label("New Password"),
      email: Yup.string().email().required().label("Email"),
      username: Yup.string().min(4).required().label("Username"),

    });


    //Form submit function
    const onSubmitForgotPassword = async (values: any) => {
      values = values as string;
      console.log('username')
      console.log('email')
      console.log('newpassword')
      console.log('confirmyourpassword')

      submitButton.value!.disabled = true;

      submitButton.value?.setAttribute("data-kt-indicator", "on");

      await store.forgotPassword(values);

      const error = Object.values(store.errors);

      if (username !== null && email !== null && newpassword !== null && confirmyourpassword !== null) {
        Swal.fire({
          text: "Create An Account Complete!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Next",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      // // // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };

    return {
      onSubmitForgotPassword,
      forgotPassword,
      submitButton,
      username,
      email,
      newpassword,
      confirmyourpassword,
    };
  },
});
</script>
