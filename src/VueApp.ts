import Vue from 'vue';
import { Vue as TypeVue } from 'vue/types/vue';
import Vuex from 'vuex';
import DirectVuex from 'direct-vuex';

import { storeConf } from './store';

import { SomeComponent } from './SomeComponent';

export class VueApp {
	public static init(): TypeVue | null {
		Vue.config.devtools = true;

		Vue.use(Vuex);
		// const store = new Vuex.Store(storeConf);
		const store = DirectVuex.createDirectStore(storeConf).store.original;

		return new Vue({
			el: '#app',
			store,
			components: {
				SomeComponent
			},
		});
	}
}