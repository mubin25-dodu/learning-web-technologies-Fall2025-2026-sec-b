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
    let valid = true;
    for(let i=0;i<arr.length;i++){
        let id = document.getElementById(arr[i]);
        id.style.border='none';
        console.log(id.value);
        if(id.value.trim()===''){
            id.style.border='2px solid red';
            notifyUser('Please fill out all fields','red');
            valid=false;
        }
        else if(arr[i]=='name'){
            let namePattern = /^[a-zA-Z\s]{2,50}$/;
            if(!namePattern.test(id.value)){
                id.style.border='2px solid red';
                notifyUser('Please enter a valid name (2-50 characters, letters only)','red');
                 valid=false;
            }
        }
        else if(arr[i]=='email'){
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(id.value)){
                id.style.border='2px solid red';
                notifyUser('Please enter a valid email address','red');
            valid=false;
            }
        }
        else if(arr[i]=='pass'){
            let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if(!passPattern.test(id.value)){
                id.style.border='2px solid red';
                notifyUser('Password must be 8+ characters with uppercase, lowercase, number and special character','red');
                valid=false;
            }
        }
        else if(arr[i]=='cpass'){
            let pass = document.getElementById('pass').value;
            if(id.value!==pass){
                id.style.border='2px solid red';
                notifyUser('Password and Confirm Password do not match','red');
                valid=false;
            }
        }
        else if(arr[i]=='number'){
            let numberPattern = /^(?:\+?88)?01[3-9]\d{8}$/;
            if(!numberPattern.test(id.value)){
                id.style.border='2px solid red';
                notifyUser('Please enter a valid phone number','red');
                valid=false;
            }
        }
             
    }
      if(valid){
            notifyUser('Registration successful!','green');
            let sl = document.getElementById('slider');
            sl.style.transform='translateX(0px)';
            slider_btn.innerHTML='Signup'
            document.getElementById('reg_P').innerHTML="Don't Have an account!!";
            sl.style.borderRadius='10px 100px 0px 10px';
            document.getElementById('reg_log').style.boxShadow=' 5px 5px 10px rgba(30, 43, 39, 0.397)';
        }      
        

}

    function notifyUser(message,color){   
        if(color==='red'){
        document.getElementById('notif').innerHTML=message;
        document.getElementById('notif').style.transform='translateX(-155px)';
        document.getElementById('notif').style.backgroundColor='rgba(255, 0, 0, 0.25)';
        }
        else{
        document.getElementById('notif').innerHTML=message;
        document.getElementById('notif').style.backgroundColor='#fdfdfd23';
        document.getElementById('notif').style.transform='translateX(-155px)';
        }
        setTimeout(stopNotify,10000);
}
    function stopNotify(){
        document.getElementById('notif').style.transform='translateX(110%)';
        // document.getElementById('notif').style.transform='translateX(0px)';
        // document.getElementById('notif').innerHTML='';

    }