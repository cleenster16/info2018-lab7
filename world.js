window.onload = function() {
    
    const searchbutton = document.getElementById("lookup");
    const request = new XMLHttpRequest();
    const result = document.getElementById("result");
    const country = document.getElementById("country");
    
    const controls = document.getElementById("controls");
    const getAllCheckbox = document.getElementById("all");
        
    searchbutton.addEventListener("click", function(){
        if (getAllCheckbox.checked){
            getAllCountries();
        }else{
            getCountry();
        }
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
        request.open('GET', `./world.php?country=${country.value}`, true);
        request.send();
    }
    
    function getAllCountries(){
        request.onreadystatechange = function(){
            if (request.readyState == XMLHttpRequest.DONE){
                if (request.status == 200){
                    displayMultiple(this.responseText);
                }else{
                    alert('There was a problem with the request');
                }
            }
        };
        request.open('GET', './world.php?country=&all=true', true);
        request.send();
    }
    
    function displaySingle(response){
        result.innerHTML = "<h2> Search Result<h2/><br>" + response;
    }
    
    function displayMultiple(response){
        result.innerHTML = "<h2> Search Result<h2/><br>" + response;
    }
    
}