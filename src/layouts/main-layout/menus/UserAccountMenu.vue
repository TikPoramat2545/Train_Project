<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold py-4 fs-6 w-275px"
    data-kt-menu="true">
    <!--begin::Menu item-->
    <div class="menu-item px-3">
      <div class="menu-content d-flex align-items-center px-3">
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img alt="Logo" :src="getAssetPath('media/avatars/300-1.jpg')" />
        </div>
        <!--end::Avatar-->

        <!--begin::Username-->
        <div class="d-flex flex-column">
          <div class="fw-bold d-flex align-items-center fs-5">
            {{ username }}
            <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
          </div>
          <a href="#" class="fw-semobold text-muted text-hover-primary fs-7">max@kt.com</a>
        </div>
        <!--end::Username-->
      </div>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        My Profile
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        <span class="menu-text">My Projects</span>
        <span class="menu-badge">
          <span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
        </span>
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="bottom-start"
      data-kt-menu-flip="center, top">
      <div class="menu-link px-5">
        <span class="menu-title">My Subscription</span>
        <span class="menu-arrow"></span>
      </div>
      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/pages/profile/overview" class="menu-link px-5">
            Referrals
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/pages/profile/overview" class="menu-link px-5">
            Billing
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/pages/profile/overview" class="menu-link px-5">
            Payments
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/pages/profile/overview" class="menu-link d-flex flex-stack px-5">
            Statements

            <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i>
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu separator-->
        <div class="separator my-2"></div>
        <!--end::Menu separator-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <div class="menu-content px-3">
            <label class="form-check form-switch form-check-custom form-check-solid">
              <input class="form-check-input w-30px h-20px" type="checkbox" value="1" checked name="notifications" />
              <span class="form-check-label text-muted fs-7">
                Notifications
              </span>
            </label>
          </div>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        My Statements
      </router-link>
    </div>
    <!--end::Menu item-->

    <!--begin::Menu separator-->
    <div class="separator my-2"></div>
    <!--end::Menu separator-->

    <!--begin::Menu item-->
    <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="bottom-start"
      data-kt-menu-flip="center, top">
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        <span class="menu-title position-relative">
          Language
          <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
            {{ currentLangugeLocale.name }}
            <img class="w-15px h-15px rounded-1 ms-2" :src="currentLangugeLocale.flag" alt="metronic" />
          </span>
        </span>
      </router-link>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a @click="setLang('en')" href="#" class="menu-link d-flex px-5" :class="{ active: currentLanguage === 'en' }">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" :src="getAssetPath('media/flags/united-states.svg')" alt="metronic" />
            </span>
            English
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a @click="setLang('es')" href="#" class="menu-link d-flex px-5" :class="{ active: currentLanguage === 'es' }">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" :src="getAssetPath('media/flags/spain.svg')" alt="metronic" />
            </span>
            Spanish
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a @click="setLang('de')" href="#" class="menu-link d-flex px-5" :class="{ active: currentLanguage === 'de' }">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" :src="getAssetPath('media/flags/germany.svg')" alt="metronic" />
            </span>
            German
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a @click="setLang('ja')" href="#" class="menu-link d-flex px-5" :class="{ active: currentLanguage === 'ja' }">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" :src="getAssetPath('media/flags/japan.svg')" alt="metronic" />
            </span>
            Japanese
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a @click="setLang('fr')" href="#" class="menu-link d-flex px-5" :class="{ active: currentLanguage === 'fr' }">
            <span class="symbol symbol-20px me-4">
              <img class="rounded-1" :src="getAssetPath('media/flags/france.svg')" alt="metronic" />
            </span>
            French
          </a>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="bottom-start"
      data-kt-menu-flip="center, top">
      <devicePixelRatioz class="menu-link px-5">
        <span class="menu-title">Account Settings</span>
        <span class="menu-arrow"></span>
      </devicePixelRatioz>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/email-change" class="menu-link px-5">
            Change email
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <router-link to="/password-change" class="menu-link px-5">
            Change password
          </router-link>
        </div>
        <!--end::Menu item-->

        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->

    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a @click="signOut()" class="menu-link px-5"> Sign Out </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import ApiService from "@/core/services/ApiService";
import * as cheerio from "cheerio";
import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";

export default defineComponent({
  name: "kt-user-menu",
  components: {},
  props:{
    username:{type: String, required: false},
  },
  data() {
    return {
      username: '',
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const protocol = window.location.protocol ?? "http:";
      const host = window.location.hostname ?? "localhost";
      const port = window.location.port ?? "5173";

      const html = await ApiService.get(`${protocol}//${host}:${port}`, "status");
      const $ = cheerio.load(html.data.toString());
      const APusername = $(`input[name = "username"]`).val() as string;
      this.username = APusername;
    }
  },
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useAuthStore();

    const username = ref('');

    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "en";

    const countries = {
      en: {
        flag: getAssetPath("media/flags/united-states.svg"),
        name: "English",
      },
      es: {
        flag: getAssetPath("media/flags/spain.svg"),
        name: "Spanish",
      },
      de: {
        flag: getAssetPath("media/flags/germany.svg"),
        name: "German",
      },
      ja: {
        flag: getAssetPath("media/flags/japan.svg"),
        name: "Japanese",
      },
      fr: {
        flag: getAssetPath("media/flags/france.svg"),
        name: "French",
      },
    };

    const signOut = async () => {
      const protocol = window.location.protocol ?? "http:";
      const host = window.location.hostname ?? "localhost";
      const port = window.location.port ?? "5173";
      let chapIdraw: string | undefined = undefined;

      const html2 = await ApiService.get(`${protocol}//${host}:${port}`,`apapi/logout`);

      do {
      try {
        const html2 = await ApiService.get(`${protocol}//${host}:${port}`,`apapi/logout`);
        const html = await ApiService.get(`${protocol}//${host}:${port}`,`apapi/status`);
          const $ = cheerio.load(html.data.toString());
          chapIdraw = $(`input[name = "chap-id"]`).val() as string;
      } catch (e) {
        console.log("error = " + e)
        break;
      } 
          new Promise(resolve => setTimeout(resolve, 10000));
          console.log("in loop =", chapIdraw);
        }
        while (chapIdraw === 'undefined');
        await router.push({name:"sign-in"})
    };

    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });

    return {
      signOut,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
      getAssetPath,
    };
  },
});
</script>