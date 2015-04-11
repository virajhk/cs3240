var rows = 10;
var totalPrice = 0;
var items = [
{
    name: "Item 1",
    amount: 4.00
}, 
{
    name: "Item 2",
    amount: 6.45
}
];

function populatedropdown(select) {
    for (var j=1; j<rows+1; j++) {
        var numStr = j.toString();
        var id = select+numStr;
        var list = document.getElementById(id);
        list.options[0] = new Option('Select Item', '-1');

        for (var i=1; i<items.length+1; i++)
            list.options[i]=new Option(items[i-1].name, i-1);
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

        totalPrice += price;

        totalField.innerHTML = totalPrice.toFixed(2);
    } else {
        var subtract = priceElement.innerHTML;
        totalPrice -= subtract;
        totalField.innerHTML = totalPrice.toFixed(2);
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