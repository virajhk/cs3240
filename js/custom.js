var x=120;
var pioneer=x-(x*(15/100));
var membership=x-(x*(5/100));
var passion=x-(x*(10/100));



$("#totalAmount").append("<h2> Total Amount: $"+x+"</h2>");

$("#pioneerPrice").append("Price after Discount: $"+pioneer);
$("#membershipPrice").append("Price after Discount: $"+membership);
$("#passionPrice").append("Price after Discount: $"+passion);


$(function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  });


