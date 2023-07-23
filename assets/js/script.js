const qrText = document.getElementById("codeInput");
const qrSizeSelect = document.getElementById("codeSelect");
const qrBody = document.getElementById("codeBody");
const generateBtn = document.getElementById("codeGBtn");
const downloadBtn = document.getElementById("codeDBtn");
 console.log(qrSizeSelect.value);
let size = qrSizeSelect.value;
let inputVal = qrText.value;

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    blankInput();
})
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.codeBody img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        codeDBtn.setAttribute("href", imgAtrr);
    }
    else{
        codeDBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
codeSelect.addEventListener('change',(e)=>{
    size = e.target.value;
    // blankInput();
});
function blankInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
    codeBody.innerHTML = "";
        var div = document.getElementById('codeBody');
        var h1 = document.createElement('h4');
        h1.innerHTML = 'Please !<br/>Enter the text or URL to generate your QR code';
        div.appendChild(h1);
    }
}

function generateQRCode() {
    codeBody.innerHTML = "";
     new QRCode(qrBody, {
        text: qrText.value,
        width: size,
        height: size,
        // colorDark : "#000000",
        // colorLight : "#ffffff"
    });
}