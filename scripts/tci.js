// function buttonclick()
document.getElementById("submit-btn").addEventListener('click',(e) =>{
    e.preventDefault();

    const AFname = document.getElementById("Afname").value
    const aircraftNumber = document.getElementById("Afnumber").value
    const country = document.getElementById("country").value
    const cUnit = document.getElementById("Cunit").value
    const NOcrew = document.getElementById("NOcrew").value
    const TOaircraft = document.getElementById("TOaircraft").value
    const Acallsign = document.getElementById("Acallsign").value
    const chieftech = document.getElementById("chieftech").value
    // const dates = document.getElementById("dates").value
    const dates1 = document.getElementById("dates1")
    const flighthours = document.getElementById("flighthours").value
    const file = document.getElementById("file").value
    const daten = document.getElementById("date").value
    const Tcapacity = document.getElementById("Tcapacity").value
    const TCIno = document.getElementById("TCIno").value
    const dateprocured = document.getElementsByName("dateprocured")
    const radioButtons = document.getElementsByName("serviceable")
    // querySelectorAll('.btn-radio')
    // querySelectorAll('input[name="servicabe"]');
    let Newname = document.getElementById("airName").textContent= AFname
    console.log(AFname)
    for(let i = 0; i < radioButtons.length; i++){
        
        if(radioButtons[i].checked){
            alert(`are you sure this aircarft is ${radioButtons[i].value}, if not ask ask an engineer`)
            console.log(radioButtons[i].value)
            break
        
            
        }
        else{
            alert("you havent chosen the status of this aircraft")
            console.log(dateprocured)
            break
            
        }
        
    }
   
 
 })
 