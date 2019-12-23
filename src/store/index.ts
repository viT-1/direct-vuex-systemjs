
class State {
	someValue: string | null = null;
}

const getters = {
	someValue: (state: State) => state.someValue,
};

const mutations = {
	SET_SOME_VALUE(state: State, value: string): void {
		state.someValue = value;
		console.log('vuex mutation SET_SOME_VALUE', value);
	} 
};

const actions = {
	setSomeValue: (
		{ commit }: { commit: Function },
		value: string,
	): void => commit('SET_SOME_VALUE', value),
};

export const storeConf = {
	actions,
	getters,
	mutations,
	state: new State(),
} as const;
