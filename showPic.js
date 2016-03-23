function showPic(whichpic){
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  // alert(text + description);
  description.firstChild.nodeValue=text;
  placeholder.setAttribute("src",source);
}
// function counBodyChildren()
// {
//   var body_element = document.getElementsByTagName("body")[0];
//   // alert(body_element.nodeType);
//   //nodeType有12种属性，元素节点的属性值是1，属性节点是2，文本节点是3
// }
// window.onload = counBodyChildren;
