import capitalizeFirst from "../functions/capitalizeFirst";

test('capitalizes first letter in "apple" to give "Apple"', () => {
    expect(capitalizeFirst("apple")).toMatch("Apple");
});

test('capitalizes first letter in "bUbbLeS" to give "BUbbLeS', () => {
    expect(capitalizeFirst("bUbbLeS")).toMatch("BUbbLeS");
});

test('capitalizes first letter in "POTATO" to give "POTATO', () => {
    expect(capitalizeFirst("POTATO")).toMatch("POTATO");
});