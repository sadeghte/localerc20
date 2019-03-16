export const namespaced = true;

export const state = () => ({
  // no extra state field
  cryptoTokens: [],
  allCurrencies: [],
  allCountries: [],
});

export const getters = {
  cryptoTokens(state) {
    return state.cryptoTokens;
  },
  currencies(state){
    return state.allCurrencies;
  },
  countries(state){
    return state.allCountries;
  }
}

export const mutations = {
  setCryptoTokens(state, tokens) {
    state.cryptoTokens = tokens;
  },
  setCurrencies(state, currencies) {
    state.allCurrencies = currencies;
  },
  setCountries(state, countries) {
    state.allCountries = countries;
  },
}

export const actions = {
  loadCryptoTokens({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/tokens')
        .then(({data}) => {
          if(data.success) {
            commit('setCryptoTokens', data.tokens);
            return data.tokens;
          }else{
            return [];
          }
        }).catch(err =>{})
  },
  loadCurrencies({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/currencies')
        .then(({data}) => {
          if(data.success) {
            commit('setCurrencies', data.currencies);
            return data.currencies;
          }else {
            return [];
          }
        }).catch(err =>{})
  },
  loadCountries({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/countries')
        .then(({data}) => {
          if(data.success) {
            commit('setCountries', data.countries);
            return data.countries;
          }else {
            return [];
          }
        }).catch(err =>{})
  },
}