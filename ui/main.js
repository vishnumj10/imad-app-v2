console.log('Loaded!');

var ob=document.getElementById('btn');
var x=0;
function moveRight(){
    marginLeft=marginLeft+10;
    ob.style.marginLeft=marginLeft+'px';
}
ob.onclick=function() {
   x=x+1
};


