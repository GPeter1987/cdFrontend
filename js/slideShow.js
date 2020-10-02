var i  = true;

slideShow();
      
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

changeText();

function changeText() {
    var oriText = document.getElementById("slideText").innerHTML;
    console.log(oriText);
    
    var repText = document.getElementById("news1").innerHTML;   
    
    console.log(repText);
    
    oriText = '<p>' + repText + '</p>';
    
    
}

function changePic() {
    var news1Pic = document.getElementById("news1Pic").src;    
    
    document.getElementById("newsPic1").src = news1Pic;
}