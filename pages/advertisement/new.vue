<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>New advertisement</strong></div>
          <div class="card-body">
            <!-- Trade type row -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-type-select">Type</label>
                  <select v-model="advertisement.type" class="form-control" id="adv-type-select" name="select1">
                    <option value="">Please select adv type</option>
                    <option value="sell">Sell</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                  <div class="adv-description">
                    <p>What kind of trade advertisement do you wish to create? If you wish to sell token make sure you have token in your wallet.</p>
                  </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Token row -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-token-select">Token</label>
                  <select v-model="advertisement.token" class="form-control" id="adv-token-select" name="select1">
                    <option value="">Select token</option>
                    <option v-for="token in cryptoTokens" :value="token.code">{{token.title}} ({{token.code}})</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>What kind of token do you wish to sell/buy ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Payment method row -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-payment-method">Payment method</label>
                  <select v-model="advertisement.paymentMethod" class="form-control" id="adv-payment-method">
                    <option value="">Select payment method</option>
                    <option v-for="method in allPaymentMethods" :value="method._id">{{method.title}}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How the trade price will be payed ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Currency row -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-payment-currency">Currency</label>
                  <select v-model="advertisement.currency" class="form-control" id="adv-payment-currency" name="currency-select">
                    <option v-for="currency in currencies" :value="currency.code">{{currency.code}} - {{currency.title}}</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p></p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Token Amount -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-token-amount">Amount</label>
                  <input v-model="advertisement.amount" class="form-control" id="adv-token-amount" type="number" placeholder="example: 2.3241">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How much you want to be payed per each token ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Min Transaction -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-trans-min">Min. transaction limit</label>
                  <input v-model="advertisement.limitMin" class="form-control" id="adv-trans-min" type="number" placeholder="example: 0">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Optional. Minimum transaction limit in one trade.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Max Transaction -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-trans-max">Max. transaction limit</label>
                  <input v-model="advertisement.limitMax" class="form-control" id="adv-trans-max" type="number" placeholder="example: 100">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Optional. Maximum transaction limit in one trade.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Adv enable -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-enable">Enable</label>
                  <select v-model="advertisement.enable" class="form-control" id="adv-enable" name="select1">
                    <option value="1">enable</option>
                    <option value="0">disable</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Trade can be disable at start</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Payment window -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="adv-payment-window">Payment window</label>
                  <input v-model="advertisement.paymentWindow" class="form-control" id="adv-payment-window" type="text" placeholder="example: 04:30">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How many time buyer have to confirm payment ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Opening Hours -->
            <div class="row">
              <div class="col-sm-4">
                <div style="margin-bottom: 1em">Opening hours</div>
                <div class="controls">
                  <div class="row opening_hours_row" v-for="(day, index) in ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']">
                    <div class="col-md-3">{{day}}</div>
                    <div class="col-sm-3">
                      <label @click="toggleDayEnable(index, $event)" class="switch switch-label switch-success nomg">
                        <input class="switch-input" type="checkbox" v-model="advertisement.openingHours[index].enable==true">
                        <span class="switch-slider" data-checked="On" data-unchecked="Off"></span>
                      </label>
                    </div>
                    <div class="col-md-3">
                      <TimeSelect v-model="advertisement.openingHours[index].start" title="start" :disabled="advertisement.openingHours[index].enable !== true" />
                    </div>
                    <div class="col-md-3">
                      <TimeSelect v-model="advertisement.openingHours[index].end" title="end" :disabled="advertisement.openingHours[index].enable != true" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Optional. Days and hours when you want your advertisement to be automatically shown and hidden.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <!-- Terms of trade -->
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Terms of trade</label>
                  <textarea v-model="advertisement.terms" rows="10" class="form-control" id="company" type="number" placeholder=""></textarea>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Other information you wish to tell about your trade.</p>
                  <p>Example 1: This advertisement is only for cash trades. If you want to pay online, contact localbitcoins.com/ad/1234.</p>
                  <p>Example 2: Please make request only when you can complete the payment with cash within 12 hours.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
          </div>
          <div class="card-footer">
            <button @click="createAdv" class="btn btn-sm btn-success" type="submit">
              <i class="fa fa-save"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <BaseModal title="Error" ref="errorsModal">
      <div style="padding: 1em">
        <div v-for="error in registerErrors" class="alert alert-danger">{{error}}</div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
  import TimeSelect from '@/components/TimeSelect';
  import {mapGetters, mapActions} from 'vuex';
  const emptyAdvertisement = {
    type: '',
    token: '',
    paymentMethod: '',
    currency: 'USD',
    amount: '',
    limitMin: '',
    limitMax: '',
    enable: 1,
    paymentWindow: '',
    openingHours: [0,1,2,3,4,5,6].map(i => ({enable: true, start: '', end: ''})),
    terms: ''
  };

  export default {
    middleware: ['auth'],
    layout: 'coreui',
    components: {TimeSelect},
    data() {
      return {
        advertisement: {...emptyAdvertisement},
        registerErrors: []
      }
    },
    computed: {
        ... mapGetters('global',['cryptoTokens', 'currencies', 'allPaymentMethods'])
    },
    methods: {
        ...mapActions('global',['registerNewAdvertisement']),
      async createAdv() {
        //alert(JSON.stringify(this.advertisement, null, 2));
        let response = await this.registerNewAdvertisement(this.advertisement);
        if(response.success){
          this.advertisement = {...emptyAdvertisement};
          this.$toast.success('Advertisement created successfully');
        }else{
          if(response.errors && response.errors.length > 0)
            this.registerErrors = response.errors;
          else if(response.message){
            this.registerErrors = [response.message];
          }
          else {
            this.registerErrors = ['Server side error'];
          }
          this.$refs.errorsModal.show();
        }
      },
      toggleDayEnable(index, clickEvent){
        clickEvent.preventDefault();
        this.advertisement.openingHours[index].enable = this.advertisement.openingHours[index].enable === false;
      }
    }
  }
</script>

<style>
  .user-info-table {
    font-size: 1.2em;
  }

  .user-info-table td {
    padding: 0.5em 1em;
  }

  .user-info-table td:nth-child(1) {
    font-weight: bold;
    padding-right: 3em;
  }

  .user-info-table td:nth-child(3) {
    color: #73818f;
    font-size: 0.8em;
  }

  .color-success {
    color: green
  }

  .color-danger {
    color: red
  }

  .avatar-container {
    width: 14em;
    height: 14em;
    border-radius: 25em;
    overflow: hidden;
    position: relative;
    border: 4px solid #aaa;
    margin: auto;
  }

  .avatar-container img {
    width: 100%;
    height: 100%;
  }

  .action-btn {
    width: 100%;
    padding: 0.5em 0;
    border-radius: 0.5em;
    background: #20a8d8;
    color: white;
    font-weight: bold;
    border: 1px solid #2088b6
  }

  .adv-row-separator{
    content: ' ';
    height: 2px;
    border-top: 2px dashed #ddd;
    box-sizing: border-box;
    margin: 2em 2em;
    width: 100%;
  }
  .adv-description {
    padding: 1em;
    color: #555;
    font-style: italic;
  }
  .opening_hours_row{
    margin-bottom: 0.4em;
  }
</style>