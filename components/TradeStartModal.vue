<template>
  <BaseModal title="Start Trade" ref="modal" :floatHeight="true">
    <div :class="$style.loginModalContent">
      <h6>Enter message to Seller</h6>
      <textarea rows="5" class="form-control">
      </textarea>
    </div>
    <div class="pd5 bdt-1">
      <BaseLink :to="{name: 'buy-id', params:{id: '4a67b3233d7a'}}">
        <button class="btn btn-block btn-primary btn-sm" type="button" >Start Trade</button>
      </BaseLink>
    </div>
  </BaseModal>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    data() {
      return {
      }
    },
    computed: {
    },
    methods: {
      show(event) {
        let modal = this.$refs.modal;
        modal.show(event);
      }
    }
  }
</script>


<style lang="scss" module>

  .qrimg{
    width: 12em;
    height: 12em;
  }

  .form {
    text-align: left;
  }

  .loginModalContent {
    padding: 10px;
  }
</style>
