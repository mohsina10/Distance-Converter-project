var convertType="miles";
document.addEventListener('keydown',function(event){
    var key=event.code;
    if(key==='keyK'){
        convertType='kilometers';
        document.querySelector('h1').innerHTML="kilometer to miles converter";
        document.querySelector('p').innerHTML="Type in a number of kilometers and click the button to convert the distance to miles";
    }
    else{
    if(key==='keyM'){
        convertType='miles';
        document.querySelector('h1').innerHTML="Miles to kilometer converter";
        document.querySelector('p').innerHTML="Type in a number of Miles and click the button to convert the distance to kilometers";
    }
}


     
});
document.getElementById('convert').addEventListener('submit',function(event){
    event.preventDefault();
    var distance=parseFloat(document.getElementById('distance').value);
    if(distance)
    {
        if(convertType=='miles')
        {
            var converted=(distance*1.689344).toFixed(3);
            document.getElementById('answer').innerHTML=`${distance} miles converted to ${converted} kilometers`;


        }
        else 
        {
            var converted=(distance*0.62137112).toFixed(3);
            document.getElementById('answer').innerHTML=`${distance} kilometers converted to ${converted} miles`;
        }
    }
    else{
        document.getElementById('answer').innerHTML=`<h2>Please provide a number!</h2>`;
    }
    
})
