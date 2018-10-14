window.addEventListener('load', function(){
  // console.log("this works");
  var calcBtns = ["7","8","9","/","4","5","6","x","1","2","3","+","0",".","=","-"];
  calcBtns.forEach(function(el){
    var btnDiv = document.getElementById("myBtns");
    var btn = document.createElement("a")
    btn.setAttribute("href", "#");
    btn.innerHTML = el;
    btn.className = "btn";
    btnDiv.append(btn);
  })
})
