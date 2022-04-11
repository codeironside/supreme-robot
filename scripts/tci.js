
document.getElementById("submit_btn").addEventListener('click', (e) =>{
    e.preventDefault();
    
    const AFname = document.getElementById("Afname").value
    const aircraftNumber = document.getElementById("AFnumber").value
    const country = document.getElementById("country").value
    const cUnit = document.getElementById("Cunit").value
    const NOcrew = document.getElementById("NOcrew").value
    const TOaircraft = document.getElementById("TOaircraft").value
    const Acallsign = document.getElementById("Acallsign").value
    const chieftech = document.getElementById("chieftech").value
    const dates = document.getElementById("dates").value
    const dates1 = document.getElementById("dates1").value
    const flighthours = document.getElementById("flighthours").value
    const file = document.getElementById("file").value
    const date = document.getElementById("date").value
    const Tcapacity = document.getElementById("Tcapacity").value
    const TCIno = document.getElementById("TCIno").value
    const dateprocured = document.getElementById("dateprocured").value
    if((firstName === username1 || firstName === username2) && userPassword === password){

        alert(`welcome ${firstName}, you are only signed in for one session`)
        window.location.href="http://127.0.0.1:5500/html/services.html"
    }
    else{
        const userChoice=confirm(`${firstName} is not found,would you like to register`)
        if (userChoice === true){
            window.location.href="http://127.0.0.1:5500/html/register.html"
        }
        else{
            window.location.href="http://127.0.0.1:5500/html/index.html"
        }
    }
})