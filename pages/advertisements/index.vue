<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>Online Filter</strong></div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="select3">Type</label>
                  <select v-model="filter.type" class="form-control" id="select3" name="select3">
                    <option value="">All types</option>
                    <option value="sale">Sale</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="token-search-input">Token</label>
                  <input v-model="filter.token" class="form-control" id="token-search-input" type="text" name="text-input" placeholder="Token name">
                </div>
              </div>
              <div class="col-sm-3">
                <div class="form-group">
                  <label for="token-search-pm">Payment method</label>
                  <input v-model="filter.paymentMethod" class="form-control" id="token-search-pm" type="text" name="text-input" placeholder="type method">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>Advertisements</strong>
            <a href="/advertisements/new">
              <button class="btn btn-sm btn-primary pull-right" type="submit">
                <i class="fa fa-plus-square"></i>
                <span> New Advertisement</span>
              </button>
            </a>
          </div>
          <div class="card-body">
            <table class="table table-responsive-sm table-sm table-advs">
              <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Token</th>
                <th>Limit</th>
                <th>Payment method</th>
                <th>Price</th>
                <th>Enable</th>
                <th></th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="row in getFilteredAdvertisements">
                <td><a href="#">{{row.id}}</a></td>
                <td><span class="badge" :class="row.type.toLowerCase()=='buy' ? 'badge-success' : 'badge-danger'">{{row.type}}</span></td>
                <td><img class="transaction-coin-icon" :src="row.token.icon" alt=""> {{row.token.title}}</td>
                <td>{{row.limit.min}} - {{row.limit.max}}</td>
                <td>{{row.payment.method}}</a></td>
                <td>{{row.price}}</td>
                <td>
                  <label class="switch switch-sm switch-label switch-outline-success-alt mb-0">
                    <input class="switch-input" type="checkbox" :checked="row.enable">
                    <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                  </label>
                </td>
                <td>
                  <BaseLink :to="{name: 'advertisements-edit-id',params:{id: row.id}}">
                    <button class="btn btn-sm btn-primary" type="button">edit</button>
                  </BaseLink>
                </td>
              </tr>
              </tbody>
            </table>
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">Prev</a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'coreui',
    data() {
      return {
        filter:{
          type: "",
          token: '',
          paymentMethod: ''
        },
        advertisements: [
          {
            id: 'f74f7g575744',
            type: 'Buy',
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Cash payment', window: '04:30'},
            price: 46.58,
            enable: true,
          },
          {
            id: 'f74f7g575744',
            type: 'Sale',
            token: {
              icon: '/erc20-tokens/paxos_28_2.png',
              title: 'Paxos Standard (PAX)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Pay-Pal', window: '04:30'},
            price: 46.58,
            enable: true,
          },
          {
            id: 'f74f7g575744',
            type: 'Buy',
            token: {
              icon: '/erc20-tokens/bnb_28_2.png',
              title: 'BNB (BNB)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Method of payment', window: '04:30'},
            price: 46.58,
            enable: false,
          },
          {
            id: 'f74f7g575744',
            type: 'Sale',
            token: {
              icon: '/erc20-tokens/bat.png',
              title: 'BAT (BAT)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Payment Method #3', window: '04:30'},
            price: 46.58,
            enable: false,
          },
          {
            id: 'f74f7g575744',
            type: 'Buy',
            token: {
              icon: '/erc20-tokens/centre-usdc_28.png',
              title: 'USD Coin (USDC)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Payment', window: '04:30'},
            price: 46.58,
            enable: false,
          },
          {
            id: 'f74f7g575744',
            type: 'Sale',
            token: {
              icon: '/erc20-tokens/trueusdtoken_28.png',
              title: 'TrueUSD (TUSD)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Method of payment', window: '04:30'},
            price: 46.58,
            enable: true,
          },
          {
            id: 'f74f7g575744',
            type: 'Buy',
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
            },
            limit: {min: 0, max: 100},
            payment: {method: 'Method of payment', window: '04:30'},
            price: 46.58,
            enable: false,
          },
        ]
      }
    },
    computed: {
      getFilteredAdvertisements(){
        let filtered = this.advertisements;
        if(!!this.filter.type) {
          filtered = filtered.filter(adv => {
            return adv.type.toLowerCase() === this.filter.type;
          });
        }
        if(!!this.filter.token){
          filtered = filtered.filter(adv => {
            return adv.token.title.toLowerCase().includes(this.filter.token.toLowerCase());
          });
        }
        if(!!this.filter.paymentMethod){
          filtered = filtered.filter(adv => {
            return adv.payment.method.toLowerCase().includes(this.filter.paymentMethod.toLowerCase());
          });
        }
        return filtered;
      }
    },
    methods: {
    }
  }
</script>

<style>
  .cc-token-avatar{width: 30px; height: 30px}
  .table-advs td {vertical-align: middle}
  .table-coin-count{width: 100%}
  .table-coin-count td{
    padding: 0.5em 1em;
  }
  .table-coin-count td:nth-child(1){
    padding-right: 3em;
  }
  .table-coin-count td:nth-child(2){
    font-weight: bold;
  }
  .table-coin-count tr:nth-child(odd){
    background: #eee;
  }
  .table-wallet-info{width: 100%; margin-bottom: 1.2em}
  .table-wallet-info td{
    padding: 0.5em 1em;
  }
  .table-wallet-info td:nth-child(1){
    font-weight: bold;
    padding-right: 3em
  }
  .copy-button{
    display: inline-block;
    width: inherit;
    padding: 0.2em 0.5em;
    cursor: pointer;
  }
  .transaction-coin-icon{
    height: 1.5em;
  }
</style>