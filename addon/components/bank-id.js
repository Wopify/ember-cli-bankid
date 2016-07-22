import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bankid'],

  nodeBankID: true,

  success: Ember.computed.equal('state', 'success'),
  denied: Ember.computed.equal('state', 'denied'),
  loading: Ember.computed.equal('state', 'loading'),

  mode: 'sign',//sign or auth
  requestURL: "https://appapi.bankid.com/rp/v4",


  /*UI properties*/
  chooseMethod: true,




  actions: {
    updatePersonalNumber(personalNumber){
      console.log("HEYEYY");
      this.set('requestPersonalNumber', false);
      this.set("personalNumber", personalNumber);
      console.log(this.get('personalNumber'));
      this.send('initRequest');
    },
    initRequest(){
      console.log('initRequest');
      if(this.get('nodeBankID')){
        if(!this.get('personalNumber')){
          this.set('requestPersonalNumber', true);

          return;
        }



      this.set('state', 'loading');

//Makeexternal request here
      }else{
        this.sendAction('callBankID');
      }

      //TODO create request for node-bankid backend
    },


    setMethod(method){

      if(method ==='self'){
        window.location.replace("bankid://");
      }else if(method === 'api'){
        this.set('chooseMethod', false);
        this.send('initRequest');
      }

    }
  }

});
