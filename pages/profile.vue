<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <div class="card">
          <div class="card-header"><strong>Account informations</strong></div>
          <div class="card-body">
            <table class="user-info-table">
              <tr>
                <td colspan="2">
                  <a href="#"><h2>Username</h2></a>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <h4>information about <a href="#">Username</a></h4>
                </td>
              </tr>
              <tr>
                <td>Trade volume</td>
                <td>500 USD</td>
              </tr>
              <tr>
                <td>Number of confirmed trade</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Feedback score</td>
                <td>100 %</td>
              </tr>
              <tr>
                <td>Account created</td>
                <td><strong>3</strong> month age</td>
              </tr>
              <tr>
                <td>Last seen</td>
                <td><strong>3</strong> month age</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Email</td>
                <td><i class="fa fa-check-square fa-lg color-success"></i> Confirmed <strong>3</strong> month age</td>
              </tr>
              <tr>
                <td>Phone number</td>
                <td><i class="fa fa-check-square fa-lg color-success"></i> Confirmed <strong>3</strong> month age</td>
              </tr>
              <tr>
                <td>ID, Passport </td>
                <td><i class="fa fa-check-square fa-lg color-success"></i> Confirmed <strong>3</strong> month age</td>
              </tr>
              <tr>
                <td>Trust</td>
                <td><i class="fa fa-check-square fa-lg color-success"></i> Trusted by <strong>4</strong> people</td>
              </tr>
              <tr>
                <td>Blocks</td>
                <td><i class="fa fa-minus-circle fa-lg mt-4 color-danger"></i> Blocked by <strong>0</strong> people</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-header"><strong>Actions</strong></div>
          <div class="card-body">
            <div class="text-center">
              <div class="avatar-container">
                <img src="/imgs/profile-empty.jpg" alt="username">
              </div>
              <h3>Username</h3>
              <div class="row" style="margin-top: 2em">
                <div class="col-sm-6">
                  <button class="btn btn-block btn-ghost-success active mt-2" type="button" aria-pressed="true">
                    <i class="fa fa-check-square fa-lg"></i>&nbsp;
                    <span>Trust this user</span>
                  </button>
                </div>
                <div class="col-sm-6">
                  <button class="btn btn-block btn-ghost-danger active mt-2" type="button" aria-pressed="true">
                    <i class="fa fa-minus-circle fa-lg"></i>&nbsp;
                    <span>Block this user</span>
                  </button>
                </div>
                <div class="col-sm-12">
                  <a href="/editProfile">
                    <button class="btn btn-block btn-primary active mt-2" type="button" aria-pressed="true">
                      <i class="fa fa-edit fa-lg"></i>&nbsp;
                      <span>Edit Profile</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
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
  .user-info-table tr:nth-child(even){
    background: #eee;
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