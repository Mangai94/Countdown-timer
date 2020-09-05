
var centerDiv = document.createElement('div');
centerDiv.style.width = '510px';
centerDiv.style.height='400px';
centerDiv.style.border = '1px solid red';
centerDiv.style.marginLeft = "auto";
centerDiv.style.marginRight = "auto";
centerDiv.style.padding = "50px";
centerDiv.style.boxSizing = "border-box";
centerDiv.style.fontSize = "40px";
centerDiv.style.textAlign = "center";

document.body.appendChild(centerDiv);
var i = 10;

function countDown1()
{
    if( i >= 0)
    {
        centerDiv.innerText = i+ '..';
        i--;
        setTimeout(countDown1, 1000);
    }
    else
    {
        setTimeout(function()
        {
           centerDiv.innerHTML = '';
           centerDiv.innerText = 'Advance happie diwali'
        }, 0)
    }
}

countDown1();