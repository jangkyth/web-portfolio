function readMoreFunction(obj) {
    switch(obj) {
      case myBtn1: 
        expandCollapse(1);
          break;
      case myBtn2: 
        expandCollapse(2);
          break;

      case myBtn3: 
          expandCollapse(3);
            break;

      case myBtn4: 
        expandCollapse(4);
          break;

    case myBtn5: 
        expandCollapse(5);
          break;

    default:
      console.log("error");
        break;
        
    }
  }

function expandCollapse(num) {
  var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("more" + num);
    var btnText = document.getElementById("myBtn" + num);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "read less"; 
      moreText.style.display = "inline";
    }
}

