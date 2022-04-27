var listWelcome = ["Welcome To FawwazTourism Website","Hi , Welcome To You","Welcome To Our Website","Good Evening , FawwazTourism Website"];
var weVar = document.getElementById("We");
var count = 0;
setInterval(dynamic, 3000);

function dynamic()
{
weVar.innerHTML = listWelcome[count];
count++;
if(count >= listWelcome.length)
count = 0;
}

