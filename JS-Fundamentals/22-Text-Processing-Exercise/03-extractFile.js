function extractFile(str) {
    let arr = str.split('\\')

    let lookedFile = arr.pop()

    lookedFileArr = lookedFile.split(".")

    let extension = lookedFileArr.pop()

    let fileName = lookedFileArr.join('.')

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')