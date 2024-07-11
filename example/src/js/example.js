import { Appboxo } from 'capacitor-boxo-sdk';

window.openMiniapp = () => {
    Appboxo.openMiniapp({ appId: 'app16973' });
}

window.setConfig = () => {
    Appboxo.setConfig({ clientId: '602248' });
}