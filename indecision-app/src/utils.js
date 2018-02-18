console.log("utils.js is running");

// 2 types of exorts

//1 named exports
const square = (x) => x * x;
const add = (a, b) => a + b;
export const minus = (a , b) => a - b;

//2 default exports
const subtract = (a, b) => a - b;

export { square, add, subtract as default };