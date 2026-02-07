function timer() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

    minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");
  var result = hours + " : " + minutes + " : " + seconds ;



  document.getElementById("block").innerHTML = result;

}
 setInterval(timer, 1000); 

  

function abc (){
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var date = new Date();

  var idate = date.getDate().toString().padStart(2, "0");
  var month = date.getMonth();
  var year = date.getFullYear();

  var total = idate + " " + months[month] + " " + year;

  document.getElementById("king").innerHTML = total;
}
 setInterval(abc, 1000); 



 function day (){
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var date = new Date();
   var abc = date.getDay()

   var total = days[ abc]
   document.getElementById("day").innerHTML = total
 }
setInterval(day, 1000); 







