let shopReceipt = [
    { name: "Bread", amount: 2, price: 10 },
    { name: "Eggs", amount: 10, price: 15 },
    { name: "Milk", amount: 1, price: 20 },
    { name: "Apple", amount: 20, price: 18 },
    { name: "Candy", amount: 30, price: 30 },
    { name: "Juice", amount: 1, price: 12 },
    { name: "Sushi", amount: 3, price: 35 },
];


// Function to create string from given parameters
function createString(name, amount, price) {
    return name + " x" + amount + " .............." + price + " $";
}

// Function to print out the receipt on the screen
function printReceipt(string) {
    let ul = document.getElementById("shop-receipt");
    ul.insertAdjacentHTML("beforeend", "<li>" + string + "</li>");
}

// Function to count total sum in the receipt
function findSum() {
    let sum = 0;

    shopReceipt.forEach((element) => {
        sum += element.amount * element.price;
    });
    return `Total: ${sum} $`;
}


// Function to return the most expensive product in the receipt and its cost
function findExpensiveProduct() {
    let newArr = [];
    let nameArr = [];

    shopReceipt.forEach((element) => {
        newArr.push(element.amount * element.price);
    });

    let maxPurchase = Math.max.apply(Math, newArr);

    let index = newArr.indexOf(maxPurchase);

    shopReceipt.forEach((element) => {
        nameArr.push(element.name);
    });

    let productExpensive = shopReceipt[index].name;

    return `The most expensive product is ${productExpensive}. Its total cost is ${maxPurchase} $`;
}

// Function to find the average cost

function averageCost() {
    let totalSum = 0;
    shopReceipt.forEach((element) => {
        totalSum += element.amount * element.price;
    });

    let totalAmount = 0;
    shopReceipt.forEach((element) => {
        totalAmount += element.amount;
    });
    return `Average cost is ${Math.floor(totalSum / totalAmount)} $`;
}


// Variables for buttons
let btnPrint = document.getElementById("print-btn");
let btnSum = document.getElementById("sum-btn");
let btnBigSum = document.getElementById("expensive-btn");
let btnAverage = document.getElementById("average-btn");


btnPrint.addEventListener("click", () => {
    let productArr = shopReceipt;
    for (let newString of productArr.map(function (e) {
        return createString(e.name, e.amount, e.price);
    })) {
        printReceipt(newString);
    }
});

btnSum.addEventListener("click", () => {
    document.getElementById("total-area").innerHTML = findSum();
});

btnBigSum.addEventListener("click", () => {
    document.getElementById("info-area").innerHTML = findExpensiveProduct();
});

btnAverage.addEventListener("click", () => {
    document.getElementById("info-average").innerHTML = averageCost();
});