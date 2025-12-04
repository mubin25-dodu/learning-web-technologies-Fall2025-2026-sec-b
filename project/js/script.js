let slider_btn = document.getElementById('signupbtn');
let regbtn = document.getElementById('sibtn');

if(regbtn){ regbtn.addEventListener('click',regestration)}
if(slider_btn){slider_btn.addEventListener('click',slider)}

function slider(){
    if(slider_btn.innerHTML=='Signup'){
    let sl = document.getElementById('slider');
    sl.style.transform='translateX(320px)';
    slider_btn.innerHTML='Login'
    document.getElementById('reg_P').innerHTML='Already have an account!!';
    sl.style.borderRadius='100px 10px 10px 10px';
    }
    else{
    let sl = document.getElementById('slider');
    sl.style.transform='translateX(0px)';
    slider_btn.innerHTML='Signup'
    document.getElementById('reg_P').innerHTML="Don't Have an account!!";
    sl.style.borderRadius='10px 100px 0px 10px';
    }
}
function regestration(){
     let sl = document.getElementById('slider');
    sl.style.transform='translateX(0px)';
    slider_btn.innerHTML='Signup'
    document.getElementById('reg_P').innerHTML="Don't Have an account!!";
    sl.style.borderRadius='10px 100px 0px 10px';
}