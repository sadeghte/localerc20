<template>
  <header class="app-header navbar">
    <LoginModal ref="loginModal"/>
    <button class="navbar-toggler sidebar-toggler d-lg-none mr-auto h-100" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
      <img class="navbar-brand-full" src="/coreui/img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo">
      <img class="navbar-brand-minimized" src="/coreui/img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">
    </a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-3">
        <a class="nav-link" href="#">Quick Buy</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#">Quick Sell</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#">Post a trade</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="/wallet">Deposit</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#">Help</a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <li v-if="!loggedIn" class="nav-item d-md-down-none px-3">
        <a class="nav-link" href="#">
          Sign up
        </a>
      </li>
      <li v-if="!loggedIn" class="nav-item px-3">
        <a class="nav-link" href="#"  @click="openLoginModal($event)">
          Log in
        </a>
      </li>
      <li v-if="loggedIn" class="nav-item d-md-down-none px-3">
        <a class="nav-link" href="#" @click="logout()">
          Log out
        </a>
      </li>
      <li class="nav-item d-md-down-none">
        <a class="nav-link" href="#">
          <i class="icon-bell"></i>
          <span class="badge badge-pill badge-danger">5</span>
        </a>
      </li>
      <li v-if="loggedIn" class="nav-item d-md-down-none px-3">
        <a class="nav-link" href="/profile">
          {{fullName}}
        </a>
      </li>
      <li v-if="loggedIn" class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <img class="img-avatar" :src="user.avatar" alt="admin@bootstrapmaster.com">
        </a>
        <ProfileDropDownMenu />
      </li>
    </ul>
    <div  class="navbar-collapse collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav nav-v d-lg-none">
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Quick Buy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Quick Sell</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Post a trade</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Deposit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#">Help</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex';
  import ProfileDropDownMenu from './ProfileDropDownMenu';
  import LoginModal from '../../components/loginModal.vue';
  export default {
    components: {LoginModal, ProfileDropDownMenu},
    data(){
      return{
      };
    },
    computed: {
        ...mapState('auth',['loggedIn','user']),
      fullName: function(){
          return (this.user.firstName + ' ' + this.user.lastName).trim();
      }
    },
    methods: {
      openLoginModal(event) {
        this.$refs.loginModal.show(event);
      },
      logout(){
        this.$refs.loginModal.logout();
      }
    }
  }
</script>

<style>
</style>