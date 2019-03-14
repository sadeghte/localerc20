<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><strong>Wallet Info</strong></div>
          <div class="card-body">
            <table class="table-wallet-info">
              <tbody>
              <tr>
                <td>Address</td>
                <td>
                  <span class="wallet-address">3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN</span>
                  <button class="btn btn-block btn-outline-dark copy-button" type="button" @click="copyWalletAddress">
                    <i class="fa fa-copy fa-lg"></i>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
            <h3>Transactions</h3>
            <table class="table table-responsive-sm table-sm">
              <thead>
              <tr>
                <th>Date</th>
                <th>trade</th>
                <th>From/To</th>
                <th>Type</th>
                <th>Token</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="row in transactions">
                <td>{{row.date}}</td>
                <td><a href="/buy/fdfdfdfd">{{row.trade}}</a></td>
                <td><a href="#">{{row.address.substr(0,12) + ' ...'}}</a></td>
                <td><span class="badge" :class="row.type.toLowerCase()=='in' ? 'badge-success' : 'badge-danger'">{{row.type}}</span></td>
                <td><img class="transaction-coin-icon" :src="row.token.icon" alt=""> {{row.token.title}}</td>
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
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><strong>Token Count</strong></div>
          <div class="card-body">
            <table class="table-coin-count">
              <tbody>
              <tr>
                <td>
                  <img class="cc-token-avatar" src="/erc20-tokens/dai_stablecoin.png">
                  <span>Dai stable coin (DAI)</span>
                </td>
                <td>427</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong>Send token</strong></div>
          <div class="card-body">
            <div class="form-group">
              <label for="company">Send to address</label>
              <input class="form-control" id="company" type="text" placeholder="3C5ZYoxLko8Z4dgdd...">
            </div>
            <div class="form-group">
              <label for="company">Token</label>
              <select class="form-control" id="ccyear">
                <option>Token #1</option>
                <option>Token #2</option>
                <option>Token #3</option>
              </select>
            </div>
            <div class="form-group">
              <label for="company">Amount</label>
              <input class="form-control" id="company" type="number" placeholder="0.0000">
            </div>
            <button class="btn btn-block btn-primary" type="button">Send</button>
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
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'In',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'In',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'Out',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'Out',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'In',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            amount: 45,
          },
          {
            date: '2018-09-21',
            address: '3C5ZYoxLko8Z4dgddCnx1P15VhC76pXdfN',
            type: 'Out',
            trade: 'ab568d7768f6',
            token:{
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
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