//var firstname = prompt ("enter first name")
//var lastname = prompt ("enter last name")
//var city = prompt ("enter city", "karachi")
//console.log(firstname);
//console.log(lastname);
//console.log(city);


//var name = prompt("enter name")
//var math = prompt("math marks")
//var urdu = prompt("urdu marks")
//var islamiat = prompt("islamiat marks")
//var english = prompt("english marks")
//var computer = prompt("computer marks")
//console.log(name);
//console.log(math);
//console.log(urdu);
//console.log(islamiat);
//console.log(english);
//console.log(computer);



//var officer = "yes";
//if(officer == "yes"){
 //   console.log("document submitted");
//}else{
//    console.log("wapsi")
//}

//var officer = "no";
//if(officer =="yes"){
//   console.log("document submitted")
//}else{
 //   console.log("wapsi")
//}



//var officer = true;
//if(officer == false){
 //   console.log("submitted");
//} else {
 //   console.log( "wapsi")
//}




//var age = prompt("enter your name");
//var studentcard = true;

//if(age > 20 ){
 //   console.log("student allow");
//}else if (studentcard == true){
 //   console.log("student allow on card");
//}else{
 //   console.log("not allow");
//}


//var fruits = ["orange", "apple", "banana", "mango",];
//console.log(fruits[3]);



var name = +prompt("enter name")
var math = +prompt("math marks")
var urdu = +prompt("urdu marks")
var islamiat = +prompt("islamiat marks")
var english = +prompt("english marks")
var pst = +prompt("pst marks")
var totalmarks = 500
var total = math+urdu+islamiat+english+pst
var percentage = ( total / totalmarks * 100)
console.log(percentage)

if(percentage > 80 && percentage < 90){
    console.log("your grade is A+")
}else if(percentage > 70 && percentage < 80){
    console.log("your grade is A+")
}else if(percentage > 60 && percentage < 70){
    console.log("your grade is A+")
}else if(percentage > 50 && percentage < 60){
    console.log("your grade is A+")
}