export const namespaced = true;

export const state = () => ({
  // List of all tokens available for sell/buy
  cryptoTokens: [],
  // list of all currencies available
  allCurrencies: [],
  allCountries: [],
  allPaymentMethods: [],
  // advertisement that user registered for sell or buy
  userAdvertisements: [],

  sellSearchResult: [],
  buySearchResult: [],
});

export const getters = {
  cryptoTokens(state) {
    return state.cryptoTokens;
  },
  currencies(state) {
    return state.allCurrencies;
  },
  countries(state) {
    return state.allCountries;
  },
  allPaymentMethods(state) {
    return state.allPaymentMethods;
  },
  userAdvertisementList(state) {
    return state.userAdvertisements;
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
  setPaymentMethodList(state, allPaymentMethods) {
    state.allPaymentMethods = allPaymentMethods;
  },
  setUserAdvertisementList(state, userAdvertisements) {
    state.userAdvertisements = userAdvertisements;
  },
  setSearchResult(state, {sellResults, buyResults}) {
    state.sellSearchResult = sellResults;
    state.buySearchResult = buyResults;
  },
}

export const actions = {
  loadCryptoTokens({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/tokens')
        .then(({data}) => {
          if (data.success) {
            commit('setCryptoTokens', data.tokens);
            return data.tokens;
          } else {
            return [];
          }
        }).catch(err => {
        })
  },
  loadCurrencies({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/currencies')
        .then(({data}) => {
          if (data.success) {
            commit('setCurrencies', data.currencies);
            return data.currencies;
          } else {
            return [];
          }
        }).catch(err => {
        })
  },
  loadCountries({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/countries')
        .then(({data}) => {
          if (data.success) {
            commit('setCountries', data.countries);
            return data.countries;
          } else {
            return [];
          }
        }).catch(err => {
        })
  },
  loadPaymentMethods({dispatch, commit, state, rootState}) {
    return this.$axios.get('/api/v0.1/resource/payment-methods')
        .then(({data}) => {
          if (data.success) {
            commit('setPaymentMethodList', data.allPaymentMethods);
            return data.allPaymentMethods;
          } else {
            return [];
          }
        }).catch(err => {
        })
  },
  loadUserAdvertisementList({dispatch, commit, state, rootState}) {
    console.log('loading user advertisement list ...');
    return this.$axios.get('/api/v0.1/advertisement/list')
        .then(({data}) => {
          console.log('loadUserAdvertisementList', data);
          if (data.success) {
            commit('setUserAdvertisementList', data.advertisements);
            return data.advertisements;
          } else {
            return [];
          }
        }).catch(err => {
        })
  },
  registerNewAdvertisement({dispatch, commit, state, rootState}, advertisement) {
    return this.$axios.post('/api/v0.1/advertisement/new', {advertisement})
        .then(({data}) => {
          // alert(JSON.stringify(data, null, 2));
          return data;
        }).catch(err => {
          return err;
        })
  },
  search({dispatch, commit, state, rootState}, filters) {
    return this.$axios.post('/api/v0.1/trade/search', {filters})
        .then(({data}) => {
          if(data.success)
            commit('setSearchResult', {sellResults: data.sellAdvertisements, buyResults: data.buyAdvertisements});
          return data;
        }).catch(err => {
          return err;
        })
  },
  createTrade({dispatch, commit, state, rootState}, {advertisementId, count, message}) {
    return this.$axios.post('/api/v0.1/trade/create', {advertisementId, count, message})
        .then(({data}) => {
          return data;
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  sendTradeMessage({dispatch, commit, state, rootState}, {tradeId,message}) {
    return this.$axios.post('/api/v0.1/trade/message', {tradeId, type: 'text', content: message})
        .then(({data}) => {
          return data;
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  startTrade({dispatch, commit, state, rootState}, tradeId) {
    return this.$axios.post('/api/v0.1/trade/start', {id:tradeId})
        .then(({data}) => {
          return data;
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  setTradePayed({dispatch, commit, state, rootState}, tradeId) {
    return this.$axios.post('/api/v0.1/trade/set-payed', {id:tradeId})
        .then(({data}) => {
          return data;
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  releaseTrade({dispatch, commit, state, rootState}, tradeId) {
    return this.$axios.post('/api/v0.1/trade/release', {id:tradeId})
        .then(({data}) => {
          return data;
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  fakeDeposit({dispatch, commit, state, rootState}, {token, amount}) {
    return this.$axios.post('/api/v0.1/user/fake-deposit', {token, amount})
        .then(({data}) => {
          return data
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
  withdraw({dispatch, commit, state, rootState}, {token, amount, to}) {
    return this.$axios.post('/api/v0.1/user/withdraw', {token, amount, to})
        .then(({data}) => {
          return data
        }).catch(err => {
          if(err.response && err.response.data)
            return err.response.data;
          return err;
        })
  },
}