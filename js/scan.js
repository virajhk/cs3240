var totalPrice = parseFloat(localStorage.totalPrice);
var scanPrice = 0;
console.log(totalPrice);
var selectIdStr = 1;
var prevSelectIdStr = 1;
var rows = 10;
var items = [
{
    name: "Item 1",
    amount: 4.00
}, 
{
    name: "Item 2",
    amount: 6.45
},
{
    name: "Item 3",
    amount: 3.00
}, 
{
    name: "Item 4",
    amount: 5.65
},
{
    name: "Item 5",
    amount: 8.20
}, 
{
    name: "Item 6",
    amount: 11.45
},
{
    name: "Item 7",
    amount: 21.00
}, 
{
    name: "Item 8",
    amount: 61.45
},
{
    name: "Item 9",
    amount: 47.99
}, 
{
    name: "Item 10",
    amount: 16.48
}
];

function scan() {
    var textField = "item-list"+selectIdStr;
    var itemElement = document.getElementById(textField);

    var amountField = "amount"+selectIdStr;
    var element = document.getElementById(amountField);

    var quantity = 1;
    var quantityField = "quantity"+selectIdStr;
    var quantityElement = document.getElementById(quantityField);

    var priceField = "price"+selectIdStr;
    var priceElement = document.getElementById(priceField);

    var totalField = document.getElementById('total');

    var itemRandom = (Math.random()*10).toFixed(0);

    var amount = items[itemRandom].amount.toFixed(2);
    var price = amount * Math.floor(quantity);

    itemElement.value = items[itemRandom].name;

    element.innerHTML = amount;
    
    quantityElement.innerHTML = Math.floor(quantity);

    priceElement.innerHTML = price.toFixed(2);

    scanPrice += price;

    totalField.innerHTML = scanPrice.toFixed(2);

    prevSelectIdStr = selectIdStr;

    selectIdStr++;
}

function rescan() {

    var amountField = "amount"+prevSelectIdStr;
    var element = document.getElementById(amountField);
    var amount = parseFloat(element.innerHTML);

    var quantityField = "quantity"+prevSelectIdStr;
    var quantityElement = document.getElementById(quantityField);
    var quantity = quantityElement.innerHTML;
    quantity++;

    var priceField = "price"+prevSelectIdStr;
    var priceElement = document.getElementById(priceField);

    var totalField = document.getElementById('total');

    var price = parseFloat(priceElement.innerHTML) + amount;
    
    quantityElement.innerHTML = Math.floor(quantity);

    priceElement.innerHTML = price.toFixed(2);

    scanPrice += amount;

    totalField.innerHTML = scanPrice.toFixed(2);
}

function undo() {
     
}

function addItem() {
    rows++;
    var id = "item-list" + rows.toString();
    var tdId = "item" + rows.toString();
    var appendString = "<tr><td id='" + tdId + "'><input id='" + id + "' class='col-md-12' onchange='selectItem(" + rows + ")'></input></td><td id='amount"+ rows.toString() + "'>-</td><td id='quantity" + rows.toString() + "'>-</td><td id='price" + rows.toString() + "'>-</td></tr>";
    $('#table-body').append(appendString);

    var list = document.getElementById(id);
    list.options[0] = new Option('Select Item', '-1');

    for (var i=1; i<items.length+1; i++)
        list.options[i]=new Option(items[i-1].name, i-1);
}