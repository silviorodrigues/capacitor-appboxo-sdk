import { Appboxo } from 'capacitor-boxo-sdk';

Appboxo.setConfig({ clientId: 'CLIENT_ID' });

Appboxo.addListener('custom_event', (customEvent) => {
    console.log('custom_event app_id='+customEvent.appId);
    customEvent.payload = {'test': 'test msg'};
    Appboxo.sendCustomEvent(customEvent)
});
Appboxo.addListener('miniapp_lifecycle', (event) => {
    console.log('lifecycle_app_id='+event.appId);
    console.log('lifecycle='+event.lifecycle);
    if(event.lifecycle == 'onAuth'){
        console.log('get auth code from hostapp backend');
        Appboxo.setAuthCode({appId: event.appId, authCode: '[Auth_code]'});
    }
});
Appboxo.addListener('payment_event', (event) => {
    console.log('paymentEvent_app_id='+event.appId);
    console.log('amount='+event.amount);
    event.status = 'success';
    Appboxo.sendPaymentEvent(event);
});
window.openMiniapp = () => {
    Appboxo.openMiniapp({ appId: 'app16973' });
}

window.getMiniapps = ()=>{
    Appboxo.getMiniapps()
            .then(result => { console.log(JSON.stringify(result));});
}

