export const SomeComponent = {
	template: '<div><h1>Vue is loaded!</h1><input v-model="inputValue"></div>',
	computed: {
		inputValue: {
			get () { return this.$store.getters['someValue'] },
			set (val) { this.$store.dispatch('setSomeValue', val); }
		},
	},
};
