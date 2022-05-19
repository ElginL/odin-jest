import analyzeArray from "../functions/analyzeArray";

test('analyzeArray([1,8,3,4,2,6] gives an object with average: 4, min: 1, max: 8, length: 6', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('analyzeArray([5, 4, 3, 8, 9, 1]) gives an object with average: 5, min: 1, max: 9, length: 6', () => {
    expect(analyzeArray([5,4,3,8,9,1])).toEqual({
        average: 5,
        min: 1,
        max: 9,
        length: 6
    });
});