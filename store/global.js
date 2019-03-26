export const namespaced = true;

export const state = () => ({
  // no extra state field
  cryptoTokens: [],
  allCurrencies: [],
  allCountries: [],
  allPaymentMethods: [],
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
  },
  allPaymentMethods(state){
    return state.allPaymentMethods;
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
  setPaymentMethodList(state, allPaymentMethods){
    state.allPaymentMethods = allPaymentMethods;
  }
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
  loadPaymentMethods({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/payment-methods')
        .then(({data}) => {
          if(data.success) {
            commit('setPaymentMethodList', data.allPaymentMethods);
            return data.allPaymentMethods;
          }else {
            return [];
          }
        }).catch(err =>{})
  },
  registerNewAdvertisement({dispatch, commit, state, rootState}, advertisement) {
    return this.$axios.post('/api/v0.1/advertisement/new', {advertisement})
        .then(({data}) => {
          // alert(JSON.stringify(data, null, 2));
          return data;
        }).catch(err =>{
          return err;
        })
  },
}