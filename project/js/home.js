// setInterval(bannerChange, 3000);
let lft_btn= document.getElementById('left_btn');
let rgt_btn= document.getElementById('right_btn');
if(lft_btn){
    lft_btn.addEventListener('click',() => bannerChange("left") )
    }
if(rgt_btn){
    rgt_btn.addEventListener('click', () => bannerChange("right") )
    }

function bannerChange(direction) {
    var banners = [
    'url("img/farmlink_logo.jpg")',
    'url("img/farmlink_logo.jpg")',
    'url("img/farmlink_logo.jpg")',
    'url("img/farmlink_logo.jpg")',
    ];
    var currentIndex = 0;
    if (currentIndex >= banners.length) {
    currentIndex = 0;
    }
     if(currentIndex <= 0){
        currentIndex = banners.length - 1;
    }

    if(direction==="left"){
        currentIndex++;
        console.log("Left button clicked");
    }
    if(direction==="right"){
        currentIndex--;
        console.log("Right button clicked");

    }
    else{
        currentIndex--;
    }
    let banner= document.getElementById('ad_banner');
    banner.style.backgroundImage = banners[currentIndex];
    banner.style.transform = "translateX(100%)";

    console.log("Banner changed to index: " + currentIndex);
    
}