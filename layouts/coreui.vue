<template>
  <div class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    <Header />
    <div class="app-body">
      <LeftSideBar />
      <main class="main">
        <TopStatusBar />
        <div class="container-fluid">
          <div class="animated fadeIn">
            <nuxt/>
          </div>
        </div>
      </main>
      <RightSideBar />
    </div>
    <Footer />
  </div>
</template>

<script>

  import Header from './coreui-components/Header';
  import Footer from './coreui-components/Footer';
  import LeftSideBar from './coreui-components/LeftSideBar';
  import RightSideBar from './coreui-components/RightSideBar';
  import TopStatusBar from './coreui-components/TopStatusBar';

  export default {
    components: {Header, Footer, LeftSideBar, RightSideBar, TopStatusBar},
  }
</script>


<style lang="scss">
</style>
