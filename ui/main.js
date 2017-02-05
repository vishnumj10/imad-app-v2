console.log('Loaded!');

var ob=document.getElementById('counter');
var counter=0;
ob.onclick=function() {
   counter=counter+1;
   var span=document.getElementById('count');
   span.innerHTML=counter.toString();
};


