const shopingProduct = ["Milk", "Cocoa", "Salad", "Carrots", "Tomatoes", "Ready meals"]
const productPrice = ["1.20", "2.00", "2.00", "2.00", "2.50", "5.00"]

alert("Welcome to our magic shop")
let addItem = prompt("Do you want to add a new item in the list: ")
let addPrice = Number(prompt("Please enter the price for the product: "))


if ((Number(addItem))) {
    alert("Product not found. Please select a valid product")
    listItem = prompt("Please add the product")
    
} else if (Number.isNaN(addPrice) || addPrice < 0) {
    alert("Price not found. Please select a valid value")
    prompt("Please enter the value")
    confirm("Are you sure?")
}

console.log(shopingProduct [0], productPrice [0]);
console.log(shopingProduct [1], productPrice [1]);
console.log(shopingProduct [2], productPrice [2]);
console.log(shopingProduct [3], productPrice [3]);
console.log(shopingProduct [4], productPrice [4]);
console.log(shopingProduct [5], productPrice [5]);

