//Include HTTP javascript
var x;
x=document.createElement("script");
x.setAttribute("src","http://mozilla.github.io/mixed-content-tests/tvyas/script.js");
document.body.appendChild(x);

//Include HTTP css
/*
var y;
y=document.createElement("link");
y.setAttribute("rel","stylesheet");
y.setAttribute("type", "text/css");
y.setAttribute("href", "http://mozilla.github.io/mixed-content-tests/tvyas/style.css");
document.body.appendChild(y);
*/

var z;
z=document.createElement("img");
z.setAttribute("src", "http://cisforcookie.org/CookieMonster.jpg");
document.body.appendChild(z);
