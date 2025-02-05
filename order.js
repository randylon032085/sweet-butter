/*
    New Perspectives on HTML5 and CSS3, 8th Edition
    Assignment 3
    ITEC 112 

   
    Name: Randylon Torda
    Date: 2023-11-26


    Filename: order.js


*/

window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("No error was found!  This is a  testing page only. Thank you.");
       return false;
    };
 };