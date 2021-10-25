let shoppingList = [
    { name: 'Bread', quantity: 2, purchased: 'not purchased' },
    { name: 'Eggs', quantity: 10, purchased: 'not purchased' },
    { name: 'Milk', quantity: 1, purchased: 'purchased' },
    { name: 'Apples', quantity: 20, purchased: 'not purchased' },
    { name: 'Candies', quantity: 30, purchased: 'not purchased' },
    { name: 'Pineapple juice', quantity: 1, purchased: 'purchased' },
    { name: 'Sushi', quantity: 3, purchased: 'not purchased' },
    { name: 'Pizza', quantity: 1, purchased: 'purchased' },
    { name: 'Avocado', quantity: 3, purchased: 'not purchased' },
    { name: 'Shrimps', quantity: 15, purchased: 'purchased' },
];

function isPurchased(shoppingList) {
    let newArr = shoppingList.filter(el => el.purchased == 'not purchased');
    let newArr2 = shoppingList.filter(el => el.purchased == 'purchased');
    let arr3 = newArr.concat(newArr2);
    return arr3;
}
console.log(isPurchased(shoppingList));

function createString(name, quantity, purchased) {
    return name + ' ' + quantity + ' pc(s) ' + purchased;
}

function outputInfo(string) {
    let ul = document.getElementById('shop-list');
    ul.insertAdjacentHTML('beforeend', '<li>' + string + '</li>');
}

let shopArr = isPurchased(shoppingList);
for (let newString of shopArr.map(function (e) { return createString(e.name, e.quantity, e.purchased); })) {
    outputInfo(newString);
    console.log(newString);
}