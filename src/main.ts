import { createApp } from "vue";
import { createPinia } from "pinia";
import { Tooltip } from "bootstrap";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import vue3GoogleLogin from 'vue3-google-login';
// import Vue from 'vue'
// import SocialSharing from 'vue-social-sharing'
// import VueSocialLogin from 'vue-social-login'


import "@/core/plugins/prismjs";

const app = createApp(App);

// const YOUR_CHANNEL_ID = '1661471389'

// app.use(SocialSharing)
// app.use(VueSocialLogin)

const CLIENTID = '293355955327-cembg3d0scgvgja782boie1840fj2s3l.apps.googleusercontent.com'

app.use(vue3GoogleLogin, {
  clientId: CLIENTID,
});


app.use(createPinia());
app.use(router);
app.use(ElementPlus);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initKtIcon(app);
initVeeValidate();

app.use(i18n);

app.directive("tooltip", (el) => {
  new Tooltip(el);
});

app.mount("#app");