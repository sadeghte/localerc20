<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header"><strong>Terms of trade</strong></div>
          <div class="card-body">
            <pre style="white-space: pre-line;">
✔️⚡️#BitcoinRevolution - Contact +573192538603✔️⚡️
100% Security Sales in USA

Terms in English:
Please read the following conditions before opening the operation:

I. As soon as you open the transaction, request the recipient's information and make your payment, WE ONLY ACCEPT DEPOSIT IN CASH. (Country of destination is Colombia)

II. You assume the commission of the money sent, please once the payment is made, send the reference number, your full name and city from where you send the money.

III. The transfer must be available in western to pick up and the bitcoins will be released once the money has been collected, approximately 30 minutes.

IV. If you can not complete the payment within two hours, do not open the transaction.

V. Hours of operation from 8:00 a.m. until 4:00 p.m.
(Colombia time)


Términos en Español:
Por favor antes de abrir la operación, lea las siguientes condiciones:

I. Tan pronto como abra la operación solicite la información del destinatario, y realice su pago. SOLO ACEPTAMOS DEPOSITO EN EFECTIVO.
(País de destino es Colombia)

II. Usted asume la comisión del dinero enviado, por favor una vez hecho el pago, envíe el número de referencia, su nombre completo y ciudad desde donde envía el dinero.

III. La transferencia debe estar disponible en western para recoger y los bitcoins serán liberados una vez el dinero se haya recogido, aproximadamente unos 30 minutos.

IV. Si no puede completar el pago en dos horas como máximo no abra la operación.

V. Horario de atención de 8:00 a.m. hasta las 16:00
(Hora de Colombia)

            </pre>
            <div class="form-check checkbox">
              <input class="form-check-input" id="check1" type="checkbox" value="">
              <label class="form-check-label" for="check1">I read and accept the trade terms.</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card">
          <div class="card-header"><strong>Trade Info</strong></div>
          <div class="card-body">

            <div class="frm-container">
              <div class="frm-row">
                <label>Price</label>
                <div class="frm-info-box">
                  <input type="text">
                  <span></span>
                </div>
              </div>
            </div>

            <form class="form-horizontal" action="" method="post" enctype="multipart/form-data">
              <div class="row">
                <label class="col-md-3 col-form-label"><strong>Token</strong></label>
                <div class="col-md-9">

                  <p class="form-control-static">
                    <img src="/erc20-tokens/dai_stablecoin.png" class="cc-token-avatar">
                    <span>Dai stable coin (DAI)</span>
                  </p>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="text-input"><strong>Price</strong></label>
                <div class="col-md-9">
                  <span class="help-block text-success"><strong>1.05 USD</strong></span>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="email-input"><strong>Trade limits</strong></label>
                <div class="col-md-9">
                  <span class="help-block">100 - 720 USD</span>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="email-input"><strong>Payment method</strong></label>
                <div class="col-md-9">
                  <span class="help-block">Payment method one</span>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="email-input"><strong>User</strong></label>
                <div class="col-md-9">
                  <a href="#">
                  <span class="help-block">
                    <i class="fa fa-user"></i> Anonymous user
                  </span>
                  </a>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="email-input"><strong>Location</strong></label>
                <div class="col-md-9">
                  <span class="help-block">Country / City</span>
                </div>
              </div>
              <div class="row">
                <label class="col-md-3 col-form-label" for="email-input"><strong>Payment window</strong></label>
                <div class="col-md-9">
                  <span class="help-block">3 hours and 30 minutes</span>
                </div>
              </div>
            </form>

            <h4 style="margin: 1em 0">How much you wish to buy?</h4>

            <form class="form-inline" action="" method="post" style="margin-bottom: 1em">
              <div class="form-group form-token">
                <label for="exampleInputName2" class="pad-r-1em">
                  <strong>USD</strong>
                </label>
                <input class="form-control" id="exampleInputName2" type="number" placeholder="1.0">
              </div>
              <div class="form-group form-token">
                <label for="exampleInputEmail2" class="pad-r-1em">
                  <strong>DAI</strong>
                </label>
                <input class="form-control" id="exampleInputEmail2" type="number" placeholder="0.001">
              </div>
            </form>

            <textarea class="form-control trade-comment" rows="5" placeholder="Write your contact message and other information to the trader here... (optional)"></textarea>
            <BaseLink :to="{name: 'buy-id', params:{id: '4a67b3233d7a'}}">
              <button class="btn btn-primary trade-start-btn" type="submit">Send trade request</button>
            </BaseLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'coreui'
  }
</script>

<style>
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
  .frm-row{
    display: flex;
  }
  .frm-row label{
    width: 25%;
  }
  .frm-info-box{
    width: 75%;
  }
</style>