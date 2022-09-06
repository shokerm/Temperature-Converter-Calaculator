function FahrenheitToC (valNum){
    if(valNum !=''){
     c= (parseFloat(valNum)-32)/1.8;
     document.getElementById('res').innerHTML = c.toFixed(2);

    }
    else{
        document.getElementById('res').innerHTML ='';
    }
 


}

function CToFahrenheit(valNum){
    if(valNum !=''){
    f=(parseFloat(valNum)*1.8)+32;
    document.getElementById('res2').innerHTML = f.toFixed(2);
    }
    else{
        document.getElementById('res2').innerHTML = '';
    }

} 