import { Appboxo } from 'capacitor-boxo-sdk';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Appboxo.echo({ value: inputValue })
}
