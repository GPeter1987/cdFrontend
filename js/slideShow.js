var i  = true;
      
function slideShow() {
    
    var c1 = document.getElementById("content1");
    var c2 = document.getElementById("content2");

    if(i) {
        c2.style.display ="none";
        c1.style.display = "block";
        i = false;
        setTimeout(slideShow, 9000);
    }
    else{
        c1.style.display ="none";
        c2.style.display ="block";
        i = true;
        setTimeout(slideShow, 9000);
    }
}
slideShow();
