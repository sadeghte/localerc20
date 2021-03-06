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
        <div v-if="canPostFeedback" class="card">
          <div class="card-header"><strong>Feedback</strong></div>
          <div class="card-body">
            <div style="margin-bottom: 1em">
              <no-ssr>
                <VueStarRating
                    :rating="feedbackStar"
                    :star-size="25"
                    :show-rating="false"
                    @rating-selected="setFeedbackStar"
                />
              </no-ssr>
            </div>
            <textarea v-model="feedbackComment" style="width: 100%" rows="5"></textarea>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-primary" @click="postFeedback">Send Feedback</button>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong>Terms of trade</strong></div>
          <div class="card-body">
            <pre style="white-space: pre-line;">{{trade.advertisement.terms}}</pre>

            <button v-if="isStartBtnVisible" @click="doStartTrade" class="btn btn-primary" type="submit" style="width: 100%">Start Trade</button>

            <button v-if="isPaymentBtnVisible" @click="doSetTradePayed" class="btn btn-primary" type="submit" style="width: 100%">I have payed</button>

            <button v-if="isReleaseBtnVisible" @click="doReleaseTrade" class="btn btn-primary" type="submit" style="width: 100%">Release tokens</button>


            <div class="row">
              <div class="col-sm-6">
                <button v-if="isDisputeBtnVisible" @click="doDisputeTrade" class="btn btn-danger" type="submit" style="width: 100%">Dispute</button>
              </div>
              <div class="col-sm-6">
                <button v-if="isCancelBtnVisible" @click="doCancelTrade" class="btn btn-warning" type="submit" style="width: 100%">Cancel Trade</button>
              </div>
            </div>
          </div>
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
            <strong>{{traderTitle}}</strong>
            <BaseLink :to="{name: 'profile-id', params:{id: traderID}}">{{traderUsername}}</BaseLink>
          </div>
          <div>
            <strong>Exchange rate: </strong>
            <span class="badge badge-primary">{{trade.advertisement.amount}}</span> {{advertisementCurrency}} / TOKEN</div>
        </div>
        <div class="card">
          <div class="card-header"><strong>Message History</strong></div>
          <div class="card-body" v-viewer>
            <p v-for="msg in trade.messages">
              <strong v-if="msg.sender._id === $auth.user._id" class="text-primary">You: </strong>
              <strong v-else>
                <BaseLink :to="{name:'profile-id', params:{id: traderID}}">{{traderUsername}}: </BaseLink>
              </strong>

              <span>{{msg.content}}</span>
              <br v-if="msg.attachments.length > 0" />
              <img
                style="height: 6em; border: 2px solid #aaa; border-radius: 4px; cursor: pointer"
                v-if="msg.attachments.length > 0"
                v-for="attachment in msg.attachments"
                :src="getAttachmentUrl(attachment)"
              />
            </p>
            <textarea v-model="message" class="form-control trade-comment" rows="5" placeholder="Write your message to seller"></textarea>

            <button @click="sendMessage" class="btn btn-primary" type="submit">Send</button>
            <button @click="$refs.fileUpload.addFiles()" class="btn btn-primary" type="submit">Attachment</button>
            <input type="file" value="Attachment" />
            <VueFileUpload
              ref="fileUpload"
              :buttonsVisible="false"
              targetUrl="/api/v0.1/trade/message"
              :extraFields="{tradeId: trade._id,type: 'text', message}"
            />
          </div>
        </div>
      </div>
    </div>
    <!--<div class="row" style="padding: 2em">-->
      <!--<pre>{{JSON.stringify(trade,null,2)}}</pre>-->
    <!--</div>-->
  </div>
</template>

<script>
  import StepProgress from '~/components/StepProgress.vue';
  import VueFileUpload from '~/components/VueFileUpload.vue';
  import VueStarRating from 'vue-star-rating';
  import {mapActions, mapGetters} from 'vuex';
  import replaceAll from '../../utils/replaceAll';
  const proxyConfig = require('../../nuxt.proxy.config');
  let apiRoot = proxyConfig["/api"].target;

  export default {
    layout: 'coreui',
    components:{StepProgress, VueStarRating, VueFileUpload},
    data(){
      return{
        message: 'test message',
        sendMessageInProgress: false,
        feedbackStar: 0,
        feedbackComment: ""
      };
    },
    asyncData ({ params, $axios }) {
      return $axios.post(`/api/v0.1/trade/get-info`,{id: params.id})
          .then(({data}) => {
            if(data.success){
              let _data = {trade: data.trade};
              if(data.feedback) {
                _data.feedbackStar = data.feedback.star;
                _data.feedbackComment= data.feedback.comment;
              }
              return _data;
            }
            return {trade: null}
          })
    },
    computed: {
      ...mapGetters('global',['currencies']),
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
      },
      traderTitle: function () {
        if(this.trade.advertisementOwner._id === this.$auth.user._id){
          if(this.trade.advertisement.type === 'sell')
            return 'Buyer';
          else
            return "Seller"
        }else{
          if(this.trade.advertisement.type === 'sell')
            return 'Seller';
          else
            return "Buyer"
        }
      },
      traderID: function () {
        if(this.trade.advertisementOwner._id === this.$auth.user._id){
          return this.trade.user._id;
        }else{
          return this.trade.advertisementOwner._id;
        }
      },
      traderUsername: function () {
        if(this.trade.advertisementOwner._id === this.$auth.user._id){
          return this.trade.user.username;
        }else{
          return this.trade.advertisementOwner.username;
        }
      },
      advertisementCurrency: function () {
        let currency = this.currencies.find(item => item._id===this.trade.advertisement.currency)
        if(currency)
          return currency.code;
        return "---"
      },
      canPostFeedback: function () {
        return ['release','dispute','cancel','done'].indexOf(this.trade.status) >= 0;
      }
    },
    methods:{
      ...mapActions('global', ['sendTradeMessage', 'startTrade', 'setTradePayed', 'releaseTrade']),
      async sendMessage(){
        if(!!this.message) {
          this.sendMessageInProgress = true;
          // return console.log(this.$refs.fileUpload.getFormData());
          // let response = await this.sendTradeMessage({tradeId: this.trade._id, message: this.message});
          this.$axios.post(
            '/api/v0.1/trade/message',
            this.$refs.fileUpload.getFormData(),
            //{headers: {'Content-Type': 'multipart/form-data'}}
          )
            .then(({data}) => data)
            .catch(error => error.response.data)
            .then(response => {
              this.sendMessageInProgress = false;
              if(response.success){
                this.trade.messages = response.messages;
                this.message = "";
                this.$refs.fileUpload.clearFiles();
              }else{
                // TODO: handle global alert modal
                if(response.message)
                  alert(response.message);
                else
                  alert('server side error');
              }
            })
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
      setFeedbackStar(star){
        this.feedbackStar = star;
      },
      postFeedback(){
        if(this.feedbackStar<1 || this.feedbackStar > 5){
          return alert('Please select feedback rate');
        }
        return this.$axios.post(`/api/v0.1/trade/post-feedback`,{tradeId: this.trade._id, star: this.feedbackStar, comment: this.feedbackComment})
            .then(({data}) => {
              return data;
            }).catch(error => {
              return error.response.data;
            })
            .then(data => {
              if(data.success)
                this.$toast.success("Your feedback registered successfully");
              else {
                this.$toast.error(data.message || "Server side error");
              }
            })
      },
      getAttachmentUrl(attachment){
        return apiRoot + attachment.substr(1);
      }
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
