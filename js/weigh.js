var rows = 10;
var weighPrice = 0;
var store = [];
//localStorage.fromScan=0;
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
    amount: 5.20
}, 
{
    name: "Item 4",
    amount: 9.95
},
{
    name: "Item 5",
    amount: 7.34
}, 
{
    name: "Item 6",
    amount: 1.29
},
{
    name: "Item 7",
    amount: 8.53
}, 
{
    name: "Item 8",
    amount: 6.95
},
{
    name: "Item 9",
    amount: 6.00
}, 
{
    name: "Item 10",
    amount: 7.25
}
];

/*if (localStorage.fromScan == 1) {
    var storedItems = JSON.parse(localStorage.store);
    for (var i=1; i<=storedItems.length; i++) {
        var selectIdStr = i.toString();
        var selectedItem = "item-list"+selectIdStr;
        document.getElementById(selectedItem).selectedIndex = "0";
        console.log(document.getElementById(selectedItem).selectedIndex);
    }
}*/

function populatedropdown(select) {
    for (var j=1; j<rows+1; j++) {
        var numStr = j.toString();
        var id = select+numStr;
        var list = document.getElementById(id);
        list.options[0] = new Option('Select Item', '-1');

        for (var i=1; i<items.length+1; i++)
            list.options[i]=new Option(items[i-1].name, i-1);
    }

    if (localStorage.fromScan == 1) {
        var storedItems = JSON.parse(localStorage.store);

        for (var i=1; i<=storedItems.length; i++) {

            var selectIdStr = i.toString();
            var selectedItem = "item-list"+selectIdStr;
            var number = parseInt(storedItems[i-1].selected) + 1;
            document.getElementById(selectedItem).selectedIndex = number;

            var amountField = "amount"+selectIdStr;
            document.getElementById(amountField).innerHTML = storedItems[i-1].amount;

            var weight = Math.random();
            var weightField = "weight"+selectIdStr;
            document.getElementById(weightField).innerHTML = storedItems[i-1].weight.toFixed(2);

            var priceField = "price"+selectIdStr;
            document.getElementById(priceField).innerHTML = storedItems[i-1].price.toFixed(2);

            document.getElementById('total').innerHTML = parseFloat(localStorage.weighPrice).toFixed(2);
        }

        weighPrice = parseFloat(localStorage.weighPrice);
    }
}

function selectItem(selectId) {
    var selectIdStr = selectId.toString();
    var selectItem = "#item-list"+selectIdStr;
    var selected = $(selectItem).val();

    var amountField = "amount"+selectIdStr;
    var element = document.getElementById(amountField);

    var weight = Math.random();
    var weightField = "weight"+selectIdStr;
    var weightElement = document.getElementById(weightField);

    var priceField = "price"+selectIdStr;
    var priceElement = document.getElementById(priceField);

    var totalField = document.getElementById('total');

    if (selected != -1) {
        var amount = items[selected].amount.toFixed(2);
        var price = amount * weight.toFixed(2);

        element.innerHTML = amount;
        
        weightElement.innerHTML = weight.toFixed(2);

        priceElement.innerHTML = price.toFixed(2);

        weighPrice += price;

        localStorage.weighPrice = weighPrice;

        totalField.innerHTML = weighPrice.toFixed(2);

        var toStore = {};
        toStore.selected = selected;
        toStore.amount = amount;
        toStore.weight = weight;
        toStore.price = price;

        store.push(toStore);
    } else {
        var subtract = priceElement.innerHTML;
        weighPrice -= subtract;
        localStorage.weighPrice = weighPrice;
        totalField.innerHTML = weighPrice.toFixed(2);
        element.innerHTML = "-";
        weightElement.innerHTML = "-";
        priceElement.innerHTML = "-";
    }
}

function addItem() {
    rows++;
    var id = "item-list" + rows.toString();
    var tdId = "item" + rows.toString();
    var appendString = "<tr><td id='" + tdId + "'><select id='" + id + "' class='col-md-12' onchange='selectItem(" + rows + ")'></select></td><td id='amount"+ rows.toString() + "'>-</td><td id='weight" + rows.toString() + "'>-</td><td id='price" + rows.toString() + "'>-</td></tr>";
    $('#table-body').append(appendString);

    var list = document.getElementById(id);
    list.options[0] = new Option('Select Item', '-1');

    for (var i=1; i<items.length+1; i++)
        list.options[i]=new Option(items[i-1].name, i-1);
}

function saveItems() {
    localStorage.store = JSON.stringify(store);
}