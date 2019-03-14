<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <TabBox :tabs="['QUICK BUY', 'QUICK SELL']">
          <div class="row">
            <div class="col-sm-2">
              <input type="text" class="form-control" placeholder="Amount">
            </div>
            <div class="col-sm-2">
              <select class="form-control">
                <option>USD</option>
                <option>IRR</option>
                <option>UAE</option>
              </select>
            </div>
            <div class="col-sm-3">
              <select class="form-control">
                <option>United State</option>
                <option>Islamic Republic Of Iran</option>
                <option>United Arabic Emirate</option>
              </select>
            </div>
            <div class="col-sm-3">
              <select class="form-control">
                <option>Payment method #1</option>
                <option>Payment method #2</option>
                <option>Payment method #3</option>
              </select>
            </div>
            <div class="col-sm-2">
              <button class="form-control btn btn-success">Search</button>
            </div>
          </div>
        </TabBox>
        <table class="table table-responsive-xs table-hover table-outline mb-0">
          <thead class="thead-light">
          <tr>
            <th class="text-left">
              <i class="icon-people"></i>
            </th>
            <th>Seller</th>
            <th class="text-left">Country</th>
            <th>Feedback Score</th>
            <th class="text-left">Token</th>
            <th class="text-left">Price</th>
            <th>Activity</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td><input class="form-control" disabled></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="seller in sellers">
            <td class="text-left">
              <div class="avatar">
                <img class="img-avatar" :src="seller.avatar" alt="admin@bootstrapmaster.com">
                <span class="avatar-status" :class="['badge-' + seller.status]"></span>
              </div>
            </td>
            <td>
              <div>{{seller.name}}</div>
              <div class="small text-muted">
                <span>{{seller.age}}</span> | Registered: {{seller.registered}}</div>
            </td>
            <td class="text-left">
              <i class="flag-icon h4 mb-0" :class="['flag-icon-' + seller.country]" id="us" title="us"></i>
            </td>
            <td>
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{seller.score}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                </div>
              </div>
              <LinearProgress v-model="seller.score" :status="seller.status" />
            </td>
            <td class="text-left">
              <img class="cc-token-avatar" :src="seller.token.icon">
              <span>{{seller.token.title}}</span>
            </td>
            <td class="text-success text-left">
              <div><strong>{{seller.token.price}}</strong></div>
              <strong>{{seller.token.currency}}</strong>
            </td>
            <td>
              <div class="small text-muted">Last login</div>
              <strong>10 sec ago</strong>
            </td>
            <td>
              <BaseLink :to="{name:'ad-id', params:{id: 'test_id'}}">
                <button class="btn btn-block btn-outline-primary" type="button">Buy</button>
              </BaseLink>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="text-right">
          <BaseLink :to="{name: 'quickBuy'}">
            <i class="fa fa-plus-circle fa-lg mt-2 mb-4"></i>
            <span>See more options ...</span>
          </BaseLink>
        </div>

        <table class="table table-responsive-sm table-hover table-outline mb-0">
          <thead class="thead-light">
          <tr>
            <th class="text-left">
              <i class="icon-people"></i>
            </th>
            <th>Buyer</th>
            <th class="text-left">Country</th>
            <th>Feedback Score</th>
            <th class="text-left">Token</th>
            <th class="text-left">Price</th>
            <th>Activity</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td><input class="form-control" disabled></td>
            <td><input class="form-control" placeholder="type to filter"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr v-for="seller in sellers">
            <td class="text-left">
              <div class="avatar">
                <img class="img-avatar" :src="seller.avatar" alt="admin@bootstrapmaster.com">
                <span class="avatar-status" :class="['badge-' + seller.status]"></span>
              </div>
            </td>
            <td>
              <div>{{seller.name}}</div>
              <div class="small text-muted">
                <span>{{seller.age}}</span> | Registered: {{seller.registered}}</div>
            </td>
            <td class="text-left">
              <i class="flag-icon h4 mb-0" :class="['flag-icon-' + seller.country]" id="us" title="us"></i>
            </td>
            <td>
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{seller.score}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                </div>
              </div>
              <LinearProgress v-model="seller.score" :status="seller.status" />
            </td>
            <td class="text-left">
              <img class="cc-token-avatar" :src="seller.token.icon">
              <span>{{seller.token.title}}</span>
            </td>
            <td class="text-success text-left">
              <div><strong>{{seller.token.price}}</strong></div>
              <strong>{{seller.token.currency}}</strong>
            </td>
            <td>
              <div class="small text-muted">Last login</div>
              <strong>10 sec ago</strong>
            </td>
            <td>
              <BaseLink :to="{name:'ad-id', params:{id: 'test_id'}}">
                <button class="btn btn-block btn-outline-primary" type="button">Sell</button>
              </BaseLink>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="text-right">
          <a href="#">
            <i class="fa fa-plus-circle fa-lg mt-2 mb-4"></i>
            <span>See more options ...</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LinearProgress from '~/components/LinearProgress';
  import TabBox from '~/components/TabBox';
  export default {
    layout: 'coreui-no-sidemenu',
    components: {LinearProgress, TabBox},
    data() {
      return {
        sellers: [
          {
            name: "Yiorgos Avraamu",
            avatar: '/coreui/img/avatars/1.jpg',
            status: 'success',
            age: 'New',
            registered: 'Jan 1, 2015',
            country: 'us',
            score: 50,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: '10 sec ago'
          },
          {
            name: "Avram Tarasios",
            avatar: '/coreui/img/avatars/2.jpg',
            status: 'danger',
            age: 'Recurring',
            registered: 'Jan 1, 2015',
            country: 'br',
            score: 10,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: '5 minutes ago'
          },
          {
            name: "Quintin Ed",
            avatar: '/coreui/img/avatars/3.jpg',
            status: 'warning',
            age: 'New',
            registered: 'Jan 1, 2015',
            country: 'in',
            score: 74,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: '1 hour ago'
          },
          {
            name: "Enéas Kwadwo",
            avatar: '/coreui/img/avatars/4.jpg',
            status: 'info',
            age: 'New',
            registered: 'Jan 1, 2015',
            country: 'fr',
            score: 98,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: 'Last month'
          },
          {
            name: "Agapetus Tadeáš",
            avatar: '/coreui/img/avatars/5.jpg',
            status: 'success',
            age: 'New',
            registered: 'Jan 1, 2015',
            country: 'es',
            score: 22,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: 'Last week'
          },
          {
            name: "Friderik Dávid",
            avatar: '/coreui/img/avatars/6.jpg',
            status: 'danger',
            age: 'New',
            registered: 'Jan 1, 2015',
            country: 'pl',
            score: 43,
            token: {
              icon: '/erc20-tokens/dai_stablecoin.png',
              title: 'Dai Stable Coin (DAI)',
              price: '1.05',
              currency: 'USD'
            },
            lastActivity: 'Yesterday'
          },
        ]
      }
    }
  }

</script>

<style>
  .cc-token-avatar{width: 30px; height: 30px}
</style>