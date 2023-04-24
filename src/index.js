
function getIdea() {

    fetch("https://www.boredapi.com/api/activity").then(response => response.json()).then(data => {
        
        document.getElementById("idea").textContent = data.activity;

    }).catch(error => console.log(error));

}