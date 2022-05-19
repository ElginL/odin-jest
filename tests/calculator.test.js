import calculator from "../functions/calculator";

test('add(4, 5) called in calculator to give 9', () => {
    expect(calculator.add(4, 5)).toBe(9);
});

test('add(-5, -1) called in calculator to give -6', () => {
    expect(calculator.subtract(-5, -1)).toBe(-4);
})

test('multiply(2, 9) called in calculator to give 18', () => {
    expect(calculator.multiply(2, 9)).toBe(18);
});

test('multiply(-1, -5) called in calculator to give 5', () => {
    expect(calculator.multiply(-1, -5)).toBe(5);
});

test('multiply(0, 999) called in calculator to give 0', () => {
    expect(calculator.multiply(0, 999)).toBe(0);
});

test('divide(6, 2) called in calculator to give 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
})

test('divide(500, -2) called in calculator to give -250', () => {
    expect(calculator.divide(500, -2)).toBe(-250);
});

test('subtract(100, 102) called in calculator to give -2', () => {
    expect(calculator.subtract(100, 102)).toBe(-2);
})

test('subtract(-5, -7) called in calculator to give 2', () => {
    expect(calculator.subtract(-5, -7)).toBe(2);
})