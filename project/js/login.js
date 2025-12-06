let slider_btn = document.getElementById('signupbtn');
let regbtn = document.getElementById('sibtn');

if(regbtn){ regbtn.addEventListener('click',regestration)}
if(slider_btn){slider_btn.addEventListener('click',slider)}

function slider(){

    if(slider_btn.innerHTML=='Signup'){
    let sl = document.getElementById('slider');
    sl.style.transform='translateX(315px)';
    slider_btn.innerHTML='Login'
    document.getElementById('reg_P').innerHTML='Already have an account!!';
    sl.style.borderRadius='100px 10px 10px 10px';
    document.getElementById('reg_log').style.boxShadow=' -5px 5px 10px rgba(30, 43, 39, 0.397)';
    }
    else{
    let sl = document.getElementById('slider');
    sl.style.transform='translateX(0px)';
    slider_btn.innerHTML='Signup'
    document.getElementById('reg_P').innerHTML="Don't Have an account!!";
    sl.style.borderRadius='10px 100px 0px 10px';
    document.getElementById('reg_log').style.boxShadow=' 5px 5px 10px rgba(30, 43, 39, 0.397)';
    }
}
function regestration(){
    
    // let name = document.getElementById('name').value;
    // let number = document.getElementById('number').value;
    // let email = document.getElementById('email').value;
    // let pass = document.getElementById('pass').value;
    // let cpass = document.getElementById('cpass').value;
    // let role = document.getElementById('role').value;
    // let city = document.getElementById('city').value;
    // let address = document.getElementById('address').value; 
    let arr = ['name','number','email','pass','cpass','role','city','address'];

    for(let i=0;i<arr.length;i++){
        let id = document.getElementById(arr[i]);
        id.style.border='default';
        console.log(id.value);
        if(id.value.trim()===''){
            id.style.border='2px solid red';
        }
        else{
            document.getElementById('notif').innerHTML="Registration Successful";
            document.getElementById('notif').style.display='block';
            document.getElementById('notif').style.transform='translateX(-150px)';
        }
    }
   

    //  let sl = document.getElementById('slider');
    // sl.style.transform='translateX(0px)';
    // slider_btn.innerHTML='Signup'
    // document.getElementById('reg_P').innerHTML="Don't Have an account!!";
    // sl.style.borderRadius='10px 100px 0px 10px';
}