var wrap=document.getElementById('wrapper');
wrap.addEventListener("click",function(){
    var disp=document.getElementById('disp');
    var odisp=document.getElementById('Odisp');
    if(event.target.classList.contains('inputs')){
        var inputValue=event.target.value;
        // alert(inputValue);
        // alert('inputs');
        disp.value+=inputValue;
    }

else if(event.target.value==="="){
    disp.value=disp.value.replace("÷","/");//if tis not there x n div wont work . so replace 
    disp.value=disp.value.replace("×","*");
    odisp.value=eval(disp.value);
    disp.value=disp.value.replace("/","÷");
    disp.value=disp.value.replace("*","×");
    //  alert('calculate');
}
else if(event.target.value==='C'){
    odisp.value=null;
    disp.value=null;
    // alert("clear screen");
}
else{
    return null;
}
});
