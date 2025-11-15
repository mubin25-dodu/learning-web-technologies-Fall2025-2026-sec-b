const btn1 = document.getElementById('namebtn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('gbtn');

if(btn1){ btn1.addEventListener('click',namesubmit);}
if(btn2){btn2.addEventListener('click',email);}
if(btn3){btn3.addEventListener('click',gndr);}

function namesubmit(){
    let val = document.getElementById('iName').value;
      document.getElementById('one' ).style.color='black'; 
    document.getElementById('three' ).style.color='black'; 
    document.getElementById('two' ).style.color='black';  
    document.getElementById('four' ).style.color='black';
    document.getElementById('vr').style.display = 'block';

    if (val===""){
    document.getElementById('one').style.color='red';
    }
     if (val.trim().split(/\s+/).filter(Boolean).length < 2) {
    document.getElementById('two').style.color = 'red';
      for ( let i=0 ; i <val.length ;i++){
         if (val[i].charCodeAt(0) >= 97 && val[i].charCodeAt(0) <= 122){continue}
         if (val[i].charCodeAt(0) >= 65 && val[i].charCodeAt(0) <= 90 ){continue}
         if (val[i] ==="-" || val[i] ==="." || val[i]===" " ){continue}
         else{
             document.getElementById('three' ).style.color='red'; 
             document.getElementById('two' ).style.color='red';  
             document.getElementById('four' ).style.color='red';               
         }}
   
         
    }
    else{
        window.location.href="p2.html";
    } 
    
}

function email(){
    let val = document.getElementById('emailin').value;
    document.getElementById('vr').style.display = 'block';
    document.getElementById('five' ).style.color='black'; 
    document.getElementById('six' ).style.color='black';  
    if (val===""){
    document.getElementById('five').style.color='red';
    }
    if(!val.includes('@') || val.indexOf('@')<1 || !val.includes('.com') || val.indexOf('.com')<val.indexOf('@')+2){
    document.getElementById('six').style.color='red';
    }else{
        window.location.href="p3.html";
    }
}
 
function gndr(){
    // let one = documen.getElementById('male').checked ;
    document.getElementById('vr').style.display='block';
    if(document.getElementsByTagName('input').checked = false){
        document.getElementById('eh').style.color= 'red';
    }
}