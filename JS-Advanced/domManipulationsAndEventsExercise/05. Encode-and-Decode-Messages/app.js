function encodeAndDecodeMessages() {

    let [writeMessageArea, receiveMessageArea] = document.querySelectorAll('textarea');
    let [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    encodeBtn.addEventListener('click', encodeAndSend)
    decodeBtn.addEventListener('click', decodeAndReceive)

    function encodeAndSend() {
        let message = writeMessageArea.value.split('');
        let encodedMsg = ''
        for (let char of message) {
            let newChar = String.fromCharCode(char.charCodeAt() + 1)
            encodedMsg += newChar
        }
        writeMessageArea.value = '';
        receiveMessageArea.value = encodedMsg;
    }

    function decodeAndReceive() {
        let encodedMsg = receiveMessageArea.value.split('');
        let decodedMsg = '';
        for (let char of encodedMsg) {
            let newChar = String.fromCharCode(char.charCodeAt() - 1)
            decodedMsg += newChar
        }
        receiveMessageArea = decodedMsg
    }

}