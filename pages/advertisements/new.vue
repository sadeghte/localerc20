<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header"><strong>New advertisement</strong></div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
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
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Payment method</label>
                      <input class="form-control" id="company" type="text" placeholder="Enter payment method">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Price</label>
                      <input class="form-control" id="company" type="number" placeholder="Enter your first name">
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Limit min</label>
                      <input class="form-control" id="company" type="number" placeholder="Enter your first name">
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Limit max</label>
                      <input class="form-control" id="company" type="number" placeholder="Enter your first name">
                    </div>
                  </div>
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
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Payment window</label>
                      <input class="form-control" id="company" type="number" placeholder="Hours">
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="company">Payment window</label>
                      <input class="form-control" id="company" type="number" placeholder="minutes">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-success" type="submit">
              <i class="fa fa-save"></i> Save</button>
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
        advertisement: {
        }
      }
    },
    methods: {
      onAvatarSelect(){
        this.$toast.success('your avatar changed successfully');
      }
    }
  }
</script>

<style>
  .user-info-table {
    font-size: 1.2em;
  }
  .user-info-table td{
    padding: 0.5em 1em;
  }
  .user-info-table td:nth-child(1){
    font-weight: bold;
    padding-right: 3em;
  }
  .user-info-table td:nth-child(3){
    color: #73818f;
    font-size: 0.8em;
  }
  .color-success{color: green}
  .color-danger{color: red}
  .avatar-container{
    width: 14em;
    height: 14em;
    border-radius: 25em;
    overflow: hidden;
    position: relative;
    border: 4px solid #aaa;
    margin: auto;
  }
  .avatar-container img{
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
</style>