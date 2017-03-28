function createDoc() {
  var doc = document.open("text/html", "replace");
  doc.write("<html></body><div style='padding: 10px;'>Do you see the mixed content icon?  Mixed active content created me, so you should!  If you don't, we have a session restore problem.\<\/div\>\<\/body\>\<\/html\>");
  doc.close();
}
