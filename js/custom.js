var totalAmount = parseFloat(localStorage.scanPrice) + parseFloat(localStorage.weighPrice);
var x=totalAmount;
var pioneer=x-(x*(15/100));
var membership=x-(x*(5/100));
var passion=x-(x*(10/100));



$("#totalAmount").append("<h3> Total Amount: $"+x.toFixed(2)+"</h3>");

$("#pioneerPrice").append("Price after Discount: $"+pioneer.toFixed(2));
$("#membershipPrice").append("Price after Discount: $"+membership.toFixed(2));
$("#passionPrice").append("Price after Discount: $"+passion.toFixed(2));
$("#noDiscount").append("Price without Discount: $"+x.toFixed(2));


$(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });


function changePprice(){

	x=pioneer;
	$("#totalAmount").append("<h2> Final Amount: $"+x.toFixed(2)+"</h2>");

}

function changePaprice(){

	x=passion;
	$("#totalAmount").append("<h2> Final Amount: $"+x.toFixed(2)+"</h2>");

}

function changeMprice(){

	x=membership;
	$("#totalAmount").append("<h2> Final Amount: $"+x.toFixed(2)+"</h2>");

}

function changeNprice(){

	$("#totalAmount").append("<h2> Final Amount: $"+x.toFixed(2)+"</h2>");

}

function playHelpSound () {
	$('#help-button').append("<audio style='display:none;' autoplay='true' src='../audio/help.mp3'>");
}

