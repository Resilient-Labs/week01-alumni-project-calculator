window.addEventListener('load', function(){
  // console.log("this works");
  var calcBtns = ["0","1","2","3","4","5","6","7","8","9","/","x","+","-","=","."];
  calcBtns.forEach(function(el){
    var btn = document.createElement("a")
    btn.setAttribute("href", "#");
    btn.innerHTML = el;
    btn.className = "btn";
    document.body.appendChild(btn);
  })
})
