import caesarCipher from "../functions/caesarCipher";

test('caesarCipher("Caesar Cipher", 3) gives "Fdhvdu Flskhu"', () => {
    expect(caesarCipher("Caesar Cipher", 3)).toMatch("Fdhvdu Flskhu");
});

test('caesarCipher("apple juice drinker", 10) gives "kzzvo tesmo nbsxuob"', () => {
    expect(caesarCipher("apple juice drinker", 10)).toMatch("kzzvo tesmo nbsxuob");
});

test('caesarCipher("GoDLiKe", 5) gives "LtIQnPj"', () => {
    expect(caesarCipher("GoDLiKe", 5)).toMatch("LtIQnPj");
});