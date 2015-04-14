var x=120;
var pioneer=x-(x*(15/100));
var membership=x-(x*(5/100));
var passion=x-(x*(10/100));



$("#totalAmount").append("<h3> Total Amount: $"+x+"</h3>");

$("#pioneerPrice").append("Price after Discount: $"+pioneer);
$("#membershipPrice").append("Price after Discount: $"+membership);
$("#passionPrice").append("Price after Discount: $"+passion);


$(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });


function changePprice(){

	x=pioneer;
	$("#totalAmount").append("<h2> Final Amount: $"+x+"</h2>");

}

function changePaprice(){

	x=passion;
	$("#totalAmount").append("<h2> Final Amount: $"+x+"</h2>");

}

function changeMprice(){

	x=membership;
	$("#totalAmount").append("<h2> Final Amount: $"+x+"</h2>");

}

function changeNprice(){

	$("#totalAmount").append("<h2> Final Amount: $"+x+"</h2>");

}

