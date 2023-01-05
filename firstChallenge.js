let text = document.getElementById('objText');

let encrypt = document.getElementById('idEncrypt');
let decrypt = document.getElementById('idDecrypt');
let bntCopy = document.getElementById('idCopy');

const encryption = () => {
    let textarr = text.value.split('');
    console.log(textarr);
    let encrypted="";

    for (let i=0; i < textarr.length ; i++) {
        encrypted = encrypted + rules(textarr[i]); 

    }
    document.getElementById("objTextDecrypt").value = encrypted;

};
const dencryption = () => {
    let textarr = text.value;
    textarr = textarr.replaceAll('imes','i');
    textarr = textarr.replaceAll('ober','o');
    textarr = textarr.replaceAll('ai','a');
    textarr = textarr.replaceAll('enter','e');
    textarr = textarr.replaceAll('ufat','u');
    let decrypted;

document.getElementById('objTextDecrypt').value = textarr;

};


const rules = (letra) => {

if (letra == 'a'){
    return ("ai");
}else if(letra == 'e'){
    return ("enter");
}else if(letra == 'i'){
    return ("imes");
}else if (letra == 'o'){
    return ("ober");
}else if (letra =='u'){
    return ("ufat");
}else{
    return letra;
}
};

const copyText = () =>{
let textCopied = document.getElementById('objTextDecrypt').value;
console.log(textCopied);
document.getElementById('objTextDecrypt').select();
document.getElementById('objTextDecrypt').setSelectionRange(0,99999);
navigator.clipboard.writeText(textCopied);
alert("copied" + textCopied);

};


// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



encrypt.addEventListener('click', encryption);
decrypt.addEventListener('click', dencryption);
bntCopy.addEventListener('click', copyText);






