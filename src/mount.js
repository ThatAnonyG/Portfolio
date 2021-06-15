import Vue from "vue";
import vuetify from "./plugins/vuetify";

export function mount(component) {
	Vue.config.productionTip = false;

	new Vue({
		vuetify,
		render: (h) => h(component),
	}).$mount("#app");
}
