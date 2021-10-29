let shoppingList = [
    { name: "Bread", quantity: 2, purchased: "not purchased" },
    { name: "Eggs", quantity: 10, purchased: "not purchased" },
    { name: "Milk", quantity: 1, purchased: "purchased" },
    { name: "Apples", quantity: 20, purchased: "not purchased" },
    { name: "Candies", quantity: 30, purchased: "not purchased" },
    { name: "Pineapple juice", quantity: 1, purchased: "purchased" },
    { name: "Sushi", quantity: 3, purchased: "not purchased" },
    { name: "Pizza", quantity: 1, purchased: "purchased" },
    { name: "Avocado", quantity: 3, purchased: "not purchased" },
    { name: "Shrimps", quantity: 15, purchased: "purchased" },
];
// Function to show unpurchased products at the beginning and purchased in the end
function isPurchased(shoppingList) {
    let newArr = shoppingList.filter((el) => el.purchased == "not purchased");
    let newArr2 = shoppingList.filter((el) => el.purchased == "purchased");
    let arr3 = newArr.concat(newArr2);
    return arr3;
}

// Function to add new product to the shopping list. If the product already exists,only its quantity rises. If the product is purchased, it becomes unpurchased and only the new quantity added.
function addToList(name, quantity, purchased) {
    let newObj = {
        name: name,
        quantity: quantity,
        purchased: purchased,
    };
    let product = shoppingList.find(product => product.name === newObj.name);
    if (!product) {
        shoppingList.push(newObj);
        return isPurchased(shoppingList);
    } else if (product && product.purchased === 'purchased') {
        product.quantity = newObj.quantity;
        product.purchased = newObj.purchased;
        return isPurchased(shoppingList);
    } else if (product && product.purchased === 'not purchased') {
        product.quantity += newObj.quantity;
        return isPurchased(shoppingList);
    };
}
// Function to create string from given parameters
function createString(name, quantity, purchased) {
    return name + " " + quantity + " pc(s) " + purchased;
}

// Function to show ordered string in the list, with products not purchased at the beginning
function outputOrdered(string) {
    let ul = document.getElementById("shop-list");
    ul.insertAdjacentHTML("beforeend", "<li>" + string + "</li>");
}


// Function to buy products from not purchased ones. Not pruchased product recieves purchased status.
function buyProduct(name) {
    let product = shoppingList.find(product => product.name === name);
    if (!product || undefined) {
        return 'There isn\'t such a product in the list! Please add the product before buying it.';
    } else if (product && product.purchased === 'purchased') {
        return 'The product is already purchased. If you want to buy some more, add the product and its amount to the list.';
    } else if (product && product.purchased === 'not purchased') {
        product.purchased = 'purchased';
        return `Congratulations! You've just bought product "${name}" and it's been marked as purchased!`;
    };
}

// Variables for buttons
let btnOrdered = document.getElementById("ordered-btn");
let btnBuy = document.getElementById("buy-btn");
let btnAdd = document.getElementById("add-btn");


btnOrdered.addEventListener("click", () => {
    let shopArr = isPurchased(shoppingList);
    for (let newString of shopArr.map(function (e) {
        return createString(e.name, e.quantity, e.purchased);
    })) {
        outputOrdered(newString);
    }
});

btnAdd.addEventListener("click", () => {
    let productName = document.getElementById("name").value;
    let productQuantity = +document.getElementById("quantity").value;
    let productIsPurchased = document.getElementById("purchased").value;
    addToList(productName, productQuantity, productIsPurchased);

});

btnBuy.addEventListener("click", () => {
    let newProduct = document.getElementById("buy-product").value;
    document.getElementById("info-area").innerHTML = buyProduct(newProduct);
});