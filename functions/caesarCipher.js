function caesarCipher(word, key) {
    let encrypted = "";
    for (let i = 0; i < word.length; i++) {
        encrypted += warpLetter(word.charAt(i), key);
    }
    return encrypted;
}

function isAlphabet(char) {
    return char >= "a" && char <= "z" || char >= "A" && char <= "Z";
}

function warpLetter(char, key) {
    if (isAlphabet(char)) {
        let newAscii = char.charCodeAt(0) + key;
        if (char >= "a" && char <= "z" && newAscii > "z".charCodeAt(0)) {
            newAscii = newAscii - "z".charCodeAt(0) - 1 + "a".charCodeAt(0);
        }

        if (char >= "A" && char <= "Z" && newAscii > "Z".charCodeAt(0)) {
            newAscii = newAscii - "Z".charCodeAt(0) - 1 + "A".charCodeAt(0);
        }

        return String.fromCharCode(newAscii);
    }

    return char;
}

export default caesarCipher;