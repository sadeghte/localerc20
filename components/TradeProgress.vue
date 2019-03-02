<template>
  <div>
    <div>
      <div class="progress-item">
        <span>Request</span>
      </div>
      <div class="progress-item">
        <span>Start</span>
      </div>
      <div class="progress-item">
        <span>Payment</span>
      </div>
      <div class="progress-item">
        <span>Release</span>
      </div>
      <div class="progress-item">
        <span>Done</span>
      </div>
      <div style="clear: both"></div>
    </div>
    <div class="progress-base">
      <div class="progress-item">
        <div class="progress-circle selected">&nbsp;</div>
      </div>
      <div class="progress-item">
        <div class="progress-circle selected">&nbsp;</div>
      </div>
      <div class="progress-item">
        <div class="progress-circle">&nbsp;</div>
      </div>
      <div class="progress-item">
        <div class="progress-circle">&nbsp;</div>
      </div>
      <div class="progress-item">
        <div class="progress-circle">&nbsp;</div>
      </div>
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<style scoped>

  .progress-base{
    margin-top: 1em;
    width: 100%;
    height: 0px;
    border-top: 2px solid #c8ced3;
    border-bottom: 2px solid #c8ced3;
    border-radius: 2px;
    position: relative;
  }
  .progress-base>.progress-item{
    margin-top: -1em;
  }
  .progress-item{
    width: 20%;
    float: left;
    text-align: center;
  }
  .progress-circle{
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background: #c8ced3;
    display: inline-block;
  }
  .progress-circle.selected{
    background: #4dbd74;
  }
</style>