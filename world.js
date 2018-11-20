window.onload = function() {
    
    const searchbutton = document.getElementById("lookup");
    const request = new XMLHttpRequest();
    const result = document.getElementById("result");
    const country = document.getElementById("country");
    
    searchbutton.addEventListener("click", function(){
        getCountry();
    });
    
    function getCountry (){
        
        request.onreadystatechange = function(){
            if (request.readyState == XMLHttpRequest.DONE){
                if (request.status == 200){
                    displaySingle(this.responseText);
                }else{
                    alert('There was a problem with the request');
                }
            }
        };
        request.open('GET', `./world.php?country=${country.value}`, false);
        request.send();
    }
    
    function displaySingle(response){
        result.innerHTML = response;
    }
    
}