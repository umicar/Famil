var images=["Father.jpg","mother.jpg","Brother.jpg","sister.jpg"];
var names=["Raj","Swathi","Vahin","Umica"];
var i=0;
function next(){
if(i>4)
{
    i=0;
}
document.getElementById("album").src=images[i];
document.getElementById("name").innerHTML=names[i];
i++;
}