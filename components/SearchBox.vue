<template>
  <TabBox ref="searchTab" :tabs="['']">
    <div class="row">
      <div class="col-md-2">
        <input v-model="searchParams.amount" type="text" class="form-control" placeholder="Amount">
      </div>
      <div class="col-md-2">
        <select v-model="searchParams.token" class="form-control">
          <option value="">All tokens</option>
          <option v-for="t in tokens" :value="t.code">{{t.code}} - {{t.title}}</option>
        </select>
      </div>
      <div class="col-md-2">
        <select v-model="searchParams.currency" class="form-control">
          <option value="">All currencies</option>
          <option v-for="c in currencies" :value="c.code">{{c.code}} - {{c.title}}</option>
        </select>
      </div>
      <div class="col-md-2">
        <select v-model="searchParams.country" class="form-control">
          <option value="" >All Countries</option>
          <option v-for="c in countries" :value="c.code">{{c.code}} - {{c.title}}</option>
        </select>
      </div>
      <div class="col-md-2">
        <select v-model="searchParams.paymentMethod" class="form-control">
          <option value="">All Payment methods</option>
          <option value="1">Payment method #1</option>
          <option value="2">Payment method #2</option>
          <option value="3">Payment method #3</option>
        </select>
      </div>
      <div class="col-md-2">
        <button class="form-control btn btn-success" @click="doSearch">Search</button>
      </div>
    </div>
  </TabBox>
</template>
<script>
  import TabBox from '~/components/TabBox';
  import {mapState} from 'vuex';
  export default {
    components: {TabBox},
    data(){
      return {
        searchParams:{
          type: "",
          country: "",
          token: "",
          currency: 'USD',
          amount: "",
          paymentMethod: ""
        },
      };
    },
    computed:{
      ...mapState('global', {
        currencies: 'allCurrencies',
        countries: 'allCountries',
        tokens: 'cryptoTokens',
      }),
    },
    methods: {
      setSearchParams: function(params){
        switch (params.type){
          case 'sell': this.$refs.searchTab.switchToTab(0); break;
          case 'buy': this.$refs.searchTab.switchToTab(1); break;
        }
        this.searchParams = {
            ...this.searchParams,
            ...params
        };
      },
      doSearch(){
        //alert(this.$refs.searchTab.getSelectedIndex());
        let tabIndex = this.$refs.searchTab.getSelectedIndex();
        let searchType = ['sell', 'buy'][tabIndex] || 'sell';
//        return alert(searchType);
        let query = {
          ... this.searchParams,
          type: searchType,
        }
//        return alert(JSON.stringify(query, null, 2));
        this.$emit('onSearch', query);
//        this.$router.push({name: 'search', query})
      }
    }
  }
</script>