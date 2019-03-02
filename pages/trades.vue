<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>Trades List</strong></div>
          <div class="card-body">
            <table class="table table-responsive-sm table-sm">
              <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Trader</th>
                <th>Type</th>
                <th>Token</th>
                <th>Token Price</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="row in transactions">
                <td><a href="/buy/Z4dgddCnx1P15">{{row.id}}</a></td>
                <td>{{row.date}}</td>
                <td><a href="/profile">{{row.trader}}</a></td>
                <td><span class="badge" :class="row.type.toLowerCase()=='sell' ? 'badge-success' : 'badge-danger'">{{row.type}}</span></td>
                <td><img class="transaction-coin-icon" :src="row.token.icon" alt=""> {{row.token.title}}</td>
                <td>{{row.token.price}}</td>
                <td>{{row.amount}}</td>
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
        transactions: [
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Sell',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Buy',
            token:{
              icon: '/erc20-tokens/paxos_28_2.png',
              title: 'Paxos Standard (PAX)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Sell',
            token:{
              icon: '/erc20-tokens/bnb_28_2.png',
              title: 'BNB (BNB)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Sell',
            token:{
              icon: '/erc20-tokens/bat.png',
              title: 'BAT (BAT)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Buy',
            token:{
              icon: '/erc20-tokens/centre-usdc_28.png',
              title: 'USD Coin (USDC)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            id: 'Z4dgddCnx1P15',
            date: '2018-09-21',
            trader: 'User#N',
            type: 'Buy',
            token:{
              icon: '/erc20-tokens/trueusdtoken_28.png',
              title: 'TrueUSD (TUSD)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
        ]
      }
    },
    methods: {
      copyWalletAddress(){
        this.$toast.success('Address copied successfully.')
      }
    }
  }
</script>

<style>
  .cc-token-avatar{width: 30px; height: 30px}
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