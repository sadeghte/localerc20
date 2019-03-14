<template>
  <div>
    <div class="row nosp mgb10 bd-1">
      <div class="col-lg-6 nosp pd10 d-fx">
        <div class="fx-basis-2">
          <div class="avatar-container" style="cursor: pointer" onclick="document.getElementById('profileSelectInput').click()">
            <img v-if="!!user.avatar" :src="user.avatar" alt="username">
            <img v-else src="/imgs/profile-empty.jpg" alt="username">
            <input id="profileSelectInput" type="file" style="display: none" @change="onAvatarSelect">
          </div>
        </div>
        <div class="mgl10 pdl10 tbl-info fx-basis-8" style="border-left: 1px solid #f7f7f7;">
          <div class="tbl-info-item">
            <div><i class="fa fa-at fa-lg"></i></div>
            <span>Username:&nbsp;<strong>{{usernameCrop}}</strong></span>
          </div>
          <div v-if="!!(user.email)" class="tbl-info-item">
            <div><i class="icons font-lg d-block cui-envelope-letter"></i></div>
            <span>Email:&nbsp;<strong>{{user.email}}</strong></span>
          </div>
          <div class="tbl-info-item">
            <div><i class="fa fa-phone fa-lg"></i></div>
            <span>Phone:&nbsp;<span class="badge badge-success">confirmed</span><span>&nbsp;3&nbsp;month&nbsp;ago</span></span>
          </div>
          <div class="tbl-info-item">
            <div><img style="width: 1.2em" src="/imgs/brightid-av-1.jpg" alt=""></div>
            <span>BrightID&nbsp;Score:&nbsp;<strong class="clr-orange-l">95.5</strong></span>
          </div>
          <div class="tbl-info-item">
            <div><i class="fa fa-circle fa-lg" style="color: #4dbd74"></i></div>
            <span>Last&nbsp;seen:&nbsp;<strong>2 minutes ago</strong></span>
          </div>
        </div>
      </div>
      <div class="col-lg-6 nosp pd10 d-fx">
        <div class="fx-basis-2">
        </div>
        <div class="mgl10 pdl10 tbl-info fx-basis-8" style="border-left: 1px solid #f7f7f7;">
          <div class="tbl-info-item">
            <div><i class="fa fa-flag fa-lg"></i></div>
            <span>
              <span>Country:&nbsp;</span>
              <i id="ir" title="us" class="flag-icon h6 mb-0 flag-icon-ir"></i>
              <strong>Iran</strong>
            </span>
          </div>
          <div class="tbl-info-item">
            <div><i class="fa fa-registered fa-lg"></i></div>
            <span>Joined&nbsp;<strong>2 years ago</strong></span>
          </div>
          <div class="tbl-info-item">
            <div>&nbsp;</div>
            <span>Trade volume:&nbsp;<strong>430 USD</strong></span>
          </div>
          <div class="tbl-info-item">
            <div>&nbsp;</div>
            <span>Confirmed trades:&nbsp;<strong>8 trade</strong></span>
          </div>
          <div class="tbl-info-item">
            <div>&nbsp;</div>
            <span>Feedback score:&nbsp;<span class="badge badge-success">100 %</span></span>
          </div>
          <div class="tbl-info-item">
            <div><i class="fa fa-check-square fa-lg color-success"></i></div>
            <span>Trusted By:&nbsp;<strong class="badge badge-success">5 person</strong></span>
          </div>
          <div class="tbl-info-item">
            <div><i class="fa fa-minus-circle fa-lg color-danger"></i></div>
            <span>Blocked By:&nbsp;<strong class="badge badge-success">not blocked yet</strong></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row nosp mgb10 bd-1">
      <div class="col-md-6 pd10">
        <UpdateUsername />
        <UpdateEmail />
        <div class="form-space">&nbsp;</div>
        <div class="form-group">
          <label for="firstNameInput">First name</label>
          <input class="form-control" v-model="firstName" id="firstNameInput" type="text" placeholder="Enter your first name">
        </div>
        <div class="form-group">
          <label for="lastNameInput">Last name</label>
          <input class="form-control" v-model="lastName" id="lastNameInput" type="text" placeholder="Enter your last name">
        </div>
        <div class="form-group">
          <label for="select1">Country</label>
          <select class="form-control" v-model="country" id="select1" name="select1">
            <option v-for="c in countries" :selected="c.code===country" :value="c.code">{{c.name}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone-number">Phone number</label>
          <input class="form-control" v-model="mobile" id="phone-number" type="text" placeholder="+98-xxx-xxx-xxxx">
        </div>
        <button class="btn btn-sm btn-primary" type="submit" @click="saveUserData">
          <i class="fa fa-save fa-lg"></i>
          <span> Save changes</span>
        </button>
      </div>
    </div>
    <div class="row nosp mgb10 pdv10">
      <div class="col-sm-2 nosp">
        <button class="btn btn-block btn-ghost-success active mt-2 nomg" type="button" aria-pressed="true">
          <i class="fa fa-check-square fa-lg"></i>&nbsp;
          <span>Trust this user</span>
        </button>
      </div>
      <div class="col-sm-8"></div>
      <div class="col-sm-2 nosp">
        <button class="btn btn-block btn-ghost-danger active mt-2 nomg" type="button" aria-pressed="true">
          <i class="fa fa-minus-circle fa-lg"></i>&nbsp;
          <span>Block this user</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';
  import UpdateUsername from '../../components/UpdateUsername';
  import UpdateEmail from '../../components/UpdateEmail';
  export default {
    layout: 'coreui',
    components: {UpdateUsername, UpdateEmail},
    data() {
      return {
        firstName: '',
        lastName: '',
        country: '',
        mobile: '',
      }
    },
    mounted(){
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.country = this.user.country || 'US';
      this.mobile = this.user.mobile || '';
    },
    computed: {
        ...mapState('auth', ['loggedIn', 'user', 'countries']),
        ...mapGetters('global', ['countries']),
      usernameCrop: function () {
        if(this.user.username.length < 20)
          return this.user.username;
        else
          return this.user.username.substr(0,17) + '...';
      },
    },
    methods: {

      onAvatarSelect(){
        this.$toast.success('your avatar changed successfully');
      },
      saveUserData(){
        let {firstName, lastName, country, mobile} = this;
        this.$axios.post('/api/v0.1/user/update', {firstName, lastName, country, mobile})
            .then(({data}) => {
              if(data.success){
                this.$toast.success("Your profile updated successfully");
                this.$auth.fetchUser();
              }else{
                this.$toast.error(data.message || 'Server side error')
              }
            })
            .catch(error => {
              let {data} = error.response;
              this.$toast.error((data && data.message) ? data.message : 'server side error');
            })
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
  .avatar-container{
    width: 10em;
    height: 10em;
    border-radius: 25em;
    overflow: hidden;
    position: relative;
    border: 2px solid #aaa;
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
  .tbl-info{
    display: flex;
    height: 100%;
    justify-content: center;
    flex-flow: column nowrap;
  }
  .tbl-info-item{
    width: 100%;
    display: flex;
  }
  .tbl-info-item :nth-child(1){  flex-basis: 2em;  }
  .tbl-info-item :nth-child(2){  flex-basis: 90%;  }
</style>