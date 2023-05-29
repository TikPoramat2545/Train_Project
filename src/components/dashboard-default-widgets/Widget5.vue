<template>
  <div class="card card-flush" :class="className">
    <!--begin::Body-->
    <div
      class="card-body d-flex flex-column justify-content-between mt-9 bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0"
      :style="`background-position: 100% 50%;
        background-image: url('${getAssetPath(
          '/media/stock/900x600/42.png'
        )}');`"
    >
      <!--begin::Wrapper-->
      <div class="mb-10" id = "app">

        <div class="fs-2hxv fw-bold text-gray-800 text-center mb-13">
          <span class="me-2">
            <h1 style="font-size: large;"><br>Hello!!,Partner<br></h1>
              <hr>
            <h1 style="font-size: large;"><br>Connection is successfully!<br></h1>
              <hr>
            <h4 style="font-size: large;"><br> IP address is 192.168.xx.xx</h4>
              <hr>
          </span>
        </div>

      </div>
      <!--begin::Wrapper-->

      <!--begin::Illustration-->
      <img
        class="mx-auto h-150px h-lg-200px theme-light-show"
        :src="getAssetPath('media/illustrations/misc/upgrade.svg')"
        alt=""
      />
      <img
        class="mx-auto h-150px h-lg-200px theme-dark-show"
        :src="getAssetPath('media/illustrations/misc/upgrade-dark.svg')"
        alt=""
      />
      <!--end::Illustration-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { useAuthStore } from "@/stores/auth";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { username } from  "@/views/crafted/authentication/basic-flow/SignIn.vue";

export default defineComponent({
  name: "default-dashboard-widget-5",
  components: {},
  props: {
    className: { type: String, required: false },
  },
  data() {
    return {
      shUsername: username,
      time: "55m ",
    };
  },

  setup() {
    const router = useRouter();
    const store = useAuthStore();
    const signOut = () => {
      store.logout();
      router.push({ name: "sign-in" });
    }
    return {
      getAssetPath,
      signOut,
    };
  },
});
</script>
