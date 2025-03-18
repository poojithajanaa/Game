var a=Math.ceil(Math.random()*100);
var c=1;
console.log(a);
function check()
{
   var b=parseInt(document.getElementById("n1").value);
    if(a==b)
    {
        document.getElementById("message").textContent="Congrulations "+c+" times tried to reach";
    }
    else
    {
        c++;
    }
}