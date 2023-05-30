<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      @submit="onSubmitChangeEmail"
      id="kt_login_email_reset_form"
      :validation-schema="ChangeEmail"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Change Email </h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-semobold fs-4">
          Enter your username,password and new email to change your email.
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
        <label class="form-label fw-bold text-gray-900 fs-6">Password</label>
        <Field
          class="form-control form-control-solid"
          type="password"
          placeholder=""
          name="password"
          autocomplete="off" 
          v-model="password"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>

      <!-- <div class="fv-row mb-10">
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
      </div> -->

      <div class="fv-row mb-10">
        <label class="form-label fw-bold text-gray-900 fs-6">New Email</label>
        <Field
          class="form-control form-control-solid"
          type="new_email"
          placeholder=""
          name="newemail"
          autocomplete="off" 
          v-model="newemail"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="newemail" />
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
import router from "@/router";
// import { useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";


export default defineComponent({
  name: "email-change",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  data() {
    return {
      username: "",
      password: "",
      newemail: "",
    };
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const newemail = ref('');

    // const router = useRouter();
    // const store = useAuthStore();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const ChangeEmail = Yup.object().shape({
      username: Yup.string().min(4).required().label("Username"),
      password: Yup.string().min(4).required().label("Password"),
      newemail: Yup.string().required().label("New Email"),  
    });

    //Form submit function
    const onSubmitChangeEmail = async (values: any) => {
      let dataError;
      let status = 200;

      const data = await ApiService.vueInstance.axios.patch("http://202.129.16.94:82/api/changeEmail",
      {
        username: username.value,
        password: password.value,
        new_email: newemail.value,

      }
    ).catch((reason) => {
      dataError = reason.response.data.error;
      status = reason.response.status;
      console.log(reason.response.data.error);
      });

      values = values as string;
      console.log("username.value =" + username.value)
      console.log("new_email.value =" + newemail.value)
      console.log("password.value =" + password.value);

      // eslint-disable-next-line
      // submitButton.value!.disabled = true;
      // Activate loading indicator
      // submitButton.value?.setAttribute("data-kt-indicator", "on");

      // dummy delay
      // Send login request
      // await store.Email(values);

      //const error = Object.values(store.errors);

      if (status == 200) {
        Swal.fire({
          text: "Change An Email Complete!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        // }).then(function () {
        //   // Go to page after successfully login
        //   router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          html: `Error: ${status}<br>${dataError.value}`,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        });
      }
    };

    return {
      onSubmitChangeEmail,
      ChangeEmail,
      submitButton,
      username,
      password,
      newemail,

    };
  },
});
</script>
