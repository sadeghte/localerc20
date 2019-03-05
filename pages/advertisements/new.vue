<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>New advertisement</strong></div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Type</label>
                  <select class="form-control" id="select1" name="select1">
                    <option value="">Please select adv type</option>
                    <option value="1">Sell</option>
                    <option value="2">Buy</option>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Token</label>
                  <select class="form-control" id="select1" name="select1">
                    <option value="">Select token</option>
                    <option value="DAI">Dai stable token (DAI)</option>
                    <option value="PAX">Paxos Standard (PAX)</option>
                    <option value="BNB">BNB (BNB)</option>
                    <option value="BAT">BAT (BAT)</option>
                    <option value="USDC">USD Coin (USDC)</option>
                    <option value="TUSD">TrueUSD (TUSD)</option>
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Payment method</label>
                  <input class="form-control" id="company" type="text" placeholder="Enter payment method">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How the trade price will be payed ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Currency</label>
                  <input class="form-control" id="company" type="text" placeholder="example: USD">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p></p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Amount</label>
                  <input class="form-control" id="company" type="number" placeholder="example: 2.3241">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How much you want to be payed per each token ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Min. transaction limit</label>
                  <input class="form-control" id="company" type="number" placeholder="example: 0">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Optional. Minimum transaction limit in one trade.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Max. transaction limit</label>
                  <input class="form-control" id="company" type="number" placeholder="example: 100">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>Optional. Maximum transaction limit in one trade.</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Enable</label>
                  <select class="form-control" id="select1" name="select1">
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Payment window</label>
                  <input class="form-control" id="company" type="number" placeholder="example: 04:30">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="adv-description">
                  <p>How many time buyer have to confirm payment ?</p>
                </div>
              </div>
              <div class="adv-row-separator d-sm-none"></div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div style="margin-bottom: 1em">Opening hours</div>
                <div class="controls">
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Sun</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Mon</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Tue</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Wed</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Thu</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Fri</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
                    </div>
                  </div>
                  <div class="row opening_hours_row">
                    <div class="col-md-4">Sat</div>
                    <div class="col-md-4">
                      <TimeSelect title="start" />
                    </div>
                    <div class="col-md-4">
                      <TimeSelect title="end" />
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
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="company">Terms of trade</label>
                  <textarea rows="10" class="form-control" id="company" type="number" placeholder=""></textarea>
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
            <button class="btn btn-sm btn-success" type="submit">
              <i class="fa fa-save"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TimeSelect from '@/components/TimeSelect';
  export default {
    layout: 'coreui',
    components: {TimeSelect},
    data() {
      return {
        advertisement: {}
      }
    },
    methods: {
      onAvatarSelect() {
        this.$toast.success('your avatar changed successfully');
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