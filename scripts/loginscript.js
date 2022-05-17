
const username1 = "oluwatobi"
const username2 = "emmanuel"
const password = "12345678"
const labels = document.querySelectorAll('.form_control label')
labels.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => 
    `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    // ms means milliSeconds
    .join('')
})


document.getElementById("submit_btn").addEventListener('click', (e) =>{
    e.preventDefault();
    
    const firstName = document.getElementById("fName").value
    const userPassword = document.getElementById("Upassword").value
    if((firstName === username1 || firstName === username2) && userPassword === password){

        alert(`welcome ${firstName}, you are only signed in for one session`)
        window.location.href="http://127.0.0.1:5500/html/services.html"
    }
    else{
        const userChoice=confirm(`${firstName} is not found,would you like to register`)
        // if (userChoice === true){
        //     window.location.href="http://127.0.0.1:5500/html/register.html"
        // }
        // else{
        //     window.location.href="http://127.0.0.1:5500/html/index.html"
        // }
    }
})
