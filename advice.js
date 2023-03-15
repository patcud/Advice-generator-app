// api url
const api_url = "https://api.adviceslip.com/advice";
  
// Defining async function
async function getapi(url) {
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    document.getElementById("id").innerHTML = data.slip.id;
    document.getElementById("advice").innerHTML = data.slip.advice;
}

// Calling that async function
getapi(api_url);