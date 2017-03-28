var x = document.createElement('p');
x.setAttribute("id", "x");
var link = document.createElement('a');
link.setAttribute('href', 'mypage.htm');
document.getElementById('testContent').appendChild(x);
document.getElementById('testContent').appendChild(link);
var y = document.getElementById('para');
y.innerHTML="hello";

