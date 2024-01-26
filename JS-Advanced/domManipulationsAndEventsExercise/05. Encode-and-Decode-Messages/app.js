function encodeAndDecodeMessages() {
    const receivedMessage = document.querySelectorAll('textarea')[0];
    const sendMessage = document.querySelectorAll('textarea')[1];
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click', onEncode);
    decodeBtn.addEventListener('click', onDecode);

    function onEncode() {
        let textToEncrypt = receivedMessage.value.split('')
        let encryptedResult = ''

        for (let char of textToEncrypt) {
            let newChar = String.fromCharCode(char.charCodeAt(0) + 1)
            encryptedResult += newChar
        }

        receivedMessage.value = '';
        sendMessage.value = encryptedResult;
    }

    function onDecode() {
        let textToDecrypt = sendMessage.value.split('')
        let decryptedResult = ''

        for (let char of textToDecrypt) {
            let newChar = String.fromCharCode(char.charCodeAt(0) - 1)
            decryptedResult += newChar
        }

        sendMessage.value = decryptedResult;
    }

}