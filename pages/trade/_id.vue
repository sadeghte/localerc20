<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>Trade Status</strong></div>
          <div class="card-body">
            <StepProgress
                :length="5"
                :labels="['Request','Start','Payment','Release','Done']"
                :step="getTradeStatusStep()"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="alert alert-dark" role="alert">
          <div>1: Read all term of trade.</div>
          <div>2: Select the checkbox below it.</div>
          <div>3: Do trade.</div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="alert alert-dark" role="alert">
          <div>
            <strong>Advertisement: </strong>
            <BaseLink :to="{name: 'advertisement-view-id', params:{id: trade.advertisement._id}}">
              <span>{{trade.advertisement._id}}</span>
            </BaseLink>
          </div>
          <div>
            <strong>{{trade.type == 'sell' ? 'Seller: ' : 'Buyer: '}}</strong>
            <BaseLink :to="{name: 'profile-id', params:{id: trade.user._id}}">{{trade.user.username}}</BaseLink>
          </div>
          <div><strong>Exchange rate: </strong><span class="badge badge-primary">{{trade.advertisement.amount}}</span> USD / TOKEN</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><strong>Actions</strong></div>
          <div class="card-body">
            <h5>Trade conditions</h5>
            <div class="alert alert-dark" role="alert">
              <pre style="white-space: pre-line;">
<strong>Step 1:</strong>
    Do payment and attach your receipt here.

<strong>Step 2:</strong>
    text to mt mobile (+1xxx-xxx-xxxx)

<strong>Step 3:</strong>
    some instructions

<strong>Step 4:</strong>
    some instructions
              </pre>
            </div>

            <button v-if="isStartBtnVisible" @click="doStartTrade" class="btn btn-primary" type="submit" style="width: 100%">Start Trade</button>

            <button v-if="isPaymentBtnVisible" @click="doSetTradePayed" class="btn btn-primary" type="submit" style="width: 100%">I have payed</button>

            <button v-if="isReleaseBtnVisible" @click="doReleaseTrade" class="btn btn-primary" type="submit" style="width: 100%">Release tokens</button>


            <div class="row">
              <div class="col-sm-6">
                <button v-if="isDisputeBtnVisible" @click="doDisputeTrade" class="btn btn-danger" type="submit" style="width: 100%">Dispute</button>
              </div>
              <div class="col-sm-6">
                <button v-if="isCancelBtnVisible" @click="doCancelTrace" class="btn btn-warning" type="submit" style="width: 100%">Cancel Trade</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><strong>Message History</strong></div>
          <div class="card-body">
            <p v-for="msg in trade.messages">
              <strong v-if="msg.sender._id === $auth.user._id" class="text-primary">You: </strong>
              <strong v-else>
                <BaseLink :to="{name:'profile', params:{}}">{{trade.advertisement.type==='sell' ? 'Seller' : 'Buyer'}}: </BaseLink>
              </strong>

              <span>{{msg.content}}</span>
            </p>
            <textarea v-model="message" class="form-control trade-comment" rows="5" placeholder="Write your message to seller"></textarea>

            <button @click="sendMessage" class="btn btn-primary" type="submit">Send</button>
            <input type="file" value="Attachment" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StepProgress from '~/components/StepProgress.vue';
  import {mapActions} from 'vuex';
  export default {
    layout: 'coreui',
    components:{StepProgress},
    data(){
      return{
        message: '',
        sendMessageInProgress: false,
      };
    },
    asyncData ({ params, $axios }) {
      return $axios.post(`/api/v0.1/trade/get-info`,{id: params.id})
          .then(({data}) => {
            if(data.success)
              return {trade: data.trade};
            return {trade: null}
          })
    },
    computed: {
      isStartBtnVisible: function () {
        return this.trade.status==='request' && this.$auth.user._id == this.trade.advertisement.user;
      },
      isPaymentBtnVisible: function () {
        return this.trade.status==='start' && (
            (this.trade.advertisement.type === 'buy' && this.$auth.user._id == this.trade.advertisement.user)
                ||
            (this.trade.advertisement.type === 'sell' && this.$auth.user._id == this.trade.user._id)
        );
      },
      isReleaseBtnVisible: function () {
        return this.trade.status === 'payment' && (
            (this.trade.advertisement.type === 'buy' && this.$auth.user._id == this.trade.user._id)
            ||
            (this.trade.advertisement.type === 'sell' && this.$auth.user._id === this.trade.advertisement.user)
        );
      },
      isCancelBtnVisible: function () {
        return (this.trade.status === 'start' || this.trade.status === 'payment') && (
            (this.trade.advertisement.type === 'buy' && this.$auth.user._id === this.trade.advertisement.user)
            ||
            (this.trade.advertisement.type === 'sell' && this.$auth.user._id === this.trade.user._id)
        );
      },
      isDisputeBtnVisible: function () {
        return this.trade.status === 'payment' && (
            (this.trade.advertisement.type === 'buy' && this.$auth.user._id === this.trade.advertisement.user)
            ||
            (this.trade.advertisement.type === 'sell' && this.$auth.user._id === this.trade.user._id)
        );
      }
    },
    methods:{
      ...mapActions('global', ['sendTradeMessage', 'startTrade', 'setTradePayed', 'releaseTrade']),
      async sendMessage(){
        if(!!this.message) {
          this.sendMessageInProgress = true;
          let response = await this.sendTradeMessage({tradeId: this.trade._id, message: this.message});
          if(response.success){
            this.trade.messages = response.messages;
            this.message = "";
          }else{
            // TODO: handle global alert modal
            if(response.message)
              alert(response.message);
            else
              alert('server side error');
          }
          this.sendMessageInProgress = false;
        }else{
          // TODO: global alert modal
          alert('Enter text message');
        }
      },
      getTradeStatusStep(){
        if(!this.trade)
          return 0;
        switch(this.trade.status){
          case 'request': return 1;
          case 'start': return 2;
          case 'payment': return 3;
          case 'release': return 4;
          case 'done': return 5;
        }
      },
      async doStartTrade(){
        this.startTradeInProgress = true;
        let response = await this.startTrade(this.trade._id);
        if(response.success){
          this.trade = response.trade;
        }else{
          alert(response.message || 'server side error');
        }
        this.startTradeInProgress = false;
      },
      async doSetTradePayed(){
//        this.startTradeInProgress = true;
        let response = await this.setTradePayed(this.trade._id);
        if(response.success){
          this.trade = response.trade;
        }else{
          alert(response.message || 'server side error');
        }
//        this.startTradeInProgress = false;
      },
      async doReleaseTrade(){
//        this.startTradeInProgress = true;
        let response = await this.releaseTrade(this.trade._id);
        if(response.success){
          this.trade = response.trade;
        }else{
          alert(response.message || 'server side error');
        }
//        this.startTradeInProgress = false;
      },
      async doCancelTrade(){
//        this.startTradeInProgress = true;
//        let response = await this.releaseTrade(this.trade._id);
//        if(response.success){
//          this.trade = response.trade;
//        }else{
//          alert(response.message || 'server side error');
//        }
//        this.startTradeInProgress = false;
      },
      async doDisputeTrade(){
//        this.startTradeInProgress = true;
//        let response = await this.releaseTrade(this.trade._id);
//        if(response.success){
//          this.trade = response.trade;
//        }else{
//          alert(response.message || 'server side error');
//        }
//        this.startTradeInProgress = false;
      },
    }
  }
</script>

<style scoped>
  .form-token{
    background: #20a8d8;
    color: white;
    padding: 1em;
    border-radius: 4px;
    margin-right: 1em;
  }
  .form-token input {
    margin-right: 1em;
  }
  .pad-r-1em{
    padding-right: 1em;
  }
  .trade-comment{
    width: 100%;
    resize: none;
    padding: 5px;
    margin-bottom: 1em;
    font-size: 133%;
    box-sizing: border-box;
  }
  .trade-start-btn{
    font-size: 200%;
    width: 100%;
    padding: 15px;
    filter: none;
    white-space: normal;
  }
</style>