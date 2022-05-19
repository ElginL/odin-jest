import reverseString from "../functions/reverseString";

test('reverses "Hello World" to give "dlroW olleH', () => {
    expect(reverseString("Hello World")).toMatch("dlroW olleH");
});

test('reverses "all mini letters" to give "srettel inim lla', () => {
    expect(reverseString("all mini letters")).toMatch("srettel inim lla");
})

test('reverses "ALL CAPS" to give "SPAC LLA', () => {
    expect(reverseString("ALL CAPS")).toMatch("SPAC LLA");
});

test('reverses "WORDLY" to give "YLDROW', () => {
    expect(reverseString("WORDLY")).toMatch("YLDROW");
})