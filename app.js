// //  Chapter 5

// // Q 1

// var num1 = 3
// var num2 = 5
// var sum = num1 + num2
// document.write(sum);

// //  Q 2
// var num1 = 3
// var num2 = 5

// var sub = 3 - 5
// document.write(num);

// var multiply = num1 * num2
// document.write(multiply)

// var divide = 3 / 5
// document.write(divide);

// var modulus = 3 % 5
// document.write(modulus);


// // Q 3 
// var num;
// document.write("Value after variable declaration is: undefined <br> ");

// num = 5;
// document.write("Initial value: ", num, "<br>");

// num++
// document.write("Value after increment is:", num, " <br>");

// num += 7;
// document.write("Value after addition is: ", num, " <br>");

// num--
// document.write("Value after decrement is: ", num, " <br>")

// var remainder = num % 3;
// document.write(" The remainder is: ", num, " <br>")

// // Q 4

// var ticketPrice = 600

// var totalCost = ticketPrice * 5

// document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR <br> <br>");

// // Q 5

// var number = 4

// document.write(
//     "Table of 4 <br>",
//     number,
//     " x 1 = ",
//     number * 1,
//     "<br>",
//     number,
//     "x 2 = ",
//     number * 2,
//     "<br>",
//     number,
//     "x 3 = ",
//     number * 3,
//     "<br>",
//     number,
//     "x 4 = ",
//     number * 4,
//     "<br>",
//     number,
//     "x 5 = ",
//     number * 5,
//     "<br>",
//     number,
//     "x 6 = ",
//     number * 6,
//     "<br>",
//     number,
//     "x 7 = ",
//     number * 7,
//     "<br>",
//     number,
//     "x 8 = ",
//     number * 8,
//     "<br>",
//     number,
//     "x 9 = ",
//     number * 9,
//     "<br>",
//     number,
//     " x 10 =",
//     number * 10,
//     "<br> <br>"
// );

// //   Q 6

// var celsiusTemp = 30;
// var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32
// document.write(celsiusTemp, "°C is ", fahrenheitTemp, "°F<br>")

// var fahrenheitTemp = 30;
// var celsiusTemp = (fahrenheit - 32) + 5 / 9
// document.write(fahrenheitTemp, "°C is ", celsiusTemp, "°F<br>")


// Q 7


document.write( "<h1> Shopping Cart</h1>")

var priceItem1 = 650;
document.write("Price of item 1 is ", priceItem1 ,"<br>");

var quantityItem1 = 3;
document.write("Quantity of item 1 is", quantityItem1 ,"<br>");

var priceItem2 = 100;
document.write("Price of item 2 is", priceItem2 ,"<br>");

var quantityItem2 = 7;
document.write("Quantity of item 2", quantityItem2 ,"<br>");

var shippingCharges = 100;
document.write("Shipping Charges is", shippingCharges ,"<br> <br>");

var TotalCost = (priceItem1 * quantityItem1 ) + (priceItem2 * quantityItem2 ) + shippingCharges 
document.write( "Total cost of your order is " , TotalCost)


// Q 8

document.write( "<h1>Marks sheet </h1>");

var TotalMarks = 980;
document.write( "Total Marks" , TotalMarks ,"<br>");

var obtainedMarks =804;
document.write( "Marks Obtained" , obtainedMarks, "<br>");

var percentage = (TotalMarks / obtainedMarks) * 100;

document.write("Percentage" , percentage  );

// Q 9 

document.write( "<h1>Currency in PKR. </h1> ");

var usDollar = 10 ;
var SaudiRiyal = 25 ;
var usdToPkr = 104.80;
var sdrToPkr = 28;
var totalPkr = ( usDollar*usdToPkr) + (SaudiRiyal*sdrToPkr);

document.write( "Total Currency in PKR ", totalPkr)


// Chapter6-9

// Q 1

document.write("<h1>Chapter 6-9  <br> <br> </h1>");

var a =10 ;
document.write("Result: <br> The value of a is :" , a , "<br> <br>");


++a;
document.write("The value of ++a is :" , a , "<br>" );
document.write( "Now the value of ++a  is :",  a ,"<br> <br>");

a++;
document.write("The value of  a++  is : 11 "  , "<br>" );
document.write( "Now the value of a++ is :",  a ,"<br> <br>");

--a;
document.write("The value of  --a  is :  " , a, "<br>" );
document.write( "Now the value of --a is :",  a ,"<br> <br>");

a--;
document.write("The value of  a--  is : 11 "  , "<br>" );
document.write( "Now the value of a-- is :",  a ,"<br> <br>");


// Q 2 

var a =2 ,b=1;
var result = --a - --b + ++b + b--;
document.write(" a is ", a ," <br>")
document.write("b is ", b , "<br>")
document.write("result is" , result ,"<br>" )

// Q 3

var userName = prompt("Enter Your Name");



if (userName) {
    alert("Hi " + userName + "! Welcome to Developers World 😊");
} else {
    alert("Hi! Welcome to Developers World 😊");

}

// Q 4

document.write( "<h1>Multiplication Table </h1>")

var number = prompt("Enter the Number")

document.write(
    number,
    " x 1 = ",
    number * 1,
    "<br>",
    number,
    "x 2 = ",
    number * 2,
    "<br>",
    number,
    "x 3 = ",
    number * 3,
    "<br>",
    number,
    "x 4 = ",
    number * 4,
    "<br>",
    number,
    "x 5 = ",
    number * 5,
    "<br>",
    number,
    "x 6 = ",
    number * 6,
    "<br>",
    number,
    "x 7 = ",
    number * 7,
    "<br>",
    number,
    "x 8 = ",
    number * 8,
    "<br>",
    number,
    "x 9 = ",
    number * 9,
    "<br>",
    number,
    " x 10 =",
    number * 10,
    "<br> <br>"
);
