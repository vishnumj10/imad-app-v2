console.log('Loaded!');

var ob=document.getElementById('btn');
var x=0;
ob.onclick=function() {
   x=x+1
   var span=document.getElementById('count');
   span.innerHTML=counter.toString();
};


