document.getElementById('namebtn').addEventListener('click',namesubmit);

function namesubmit(){
    let val = document.getElementById('iName').value;
      document.getElementById('one' ).style.color='black'; 
    document.getElementById('three' ).style.color='black'; 
    document.getElementById('two' ).style.color='black';  
    document.getElementById('four' ).style.color='black'; 
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
