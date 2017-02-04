console.log('Loaded!');
var ob=document.getElementById('one');
function moveRight(){
    marginLeft=marginLeft+1;
    ob.style.marginLeft=marginLeft+'px';
}
ob.onclick=function() {
    var interval=setInterval(moveRight,50);
};