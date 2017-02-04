console.log('Loaded!');
var ob=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    ob.style.marginLeft=marginLeft+'px';
}
ob.onclick=function() {
    var interval=setInterval(moveRight,50);
};