function min_number(num_one, ...num_two) {
    if (typeof num_one === 'number') {
        return Math.min(num_one, ...num_two)
    } else if (Array.isArray(num_one)) {
        return Math.min(num_one, ...num_two)
    } else if (typeof num_one === 'object') {
        const values = Object.values(num_one)
        return Math.min(...values)
    }
}

console.log(min_number(17, 7));

console.log(min_number([6, 18]));

console.log(min_number({a: 19, b: 5, c: 20}));