function hashtagReplacement(sentence) {
    let array = sentence.split(' ');

    for (let i = 0; i < array.length; i++) {
        let word = array[i].toUpperCase();

        if (word.startsWith("#") && word.length > 1 && isOnlyLetters(word.slice(1))) {
            console.log(array[i].slice(1));
        }
    }


    function isOnlyLetters(str) {
        for (let char of str) {
            if (!(char >= 'A' && char <= 'Z')) {
                return false;
            }
        }
        return true;
    }
}
hashtagReplacement('Nowadays everyone uses # to tag a #speci@l word in #socialMedia')