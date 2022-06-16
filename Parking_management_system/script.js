var l = document.getElementById("signup");
l.style.display='none';

function sign()
{
    var s = document.getElementById("login");
    s.style.display='none';
    var s_1 = document.getElementById("login_div");
    s_1.style.display='none';

    var s_l = document.getElementById("signup");
    s_l.style.display='block';
    var s_l_1 = document.getElementById("signup_div");
    s_l_1.style.display='block';
}

function login()
{
    var l = document.getElementById("signup");
    l.style.display='none';
    var l_1 = document.getElementById("signup_div");
    l_1.style.display='none';

    var l_s = document.getElementById("login");
    l_s.style.display='block';
    var l_s_1 = document.getElementById("login_div");
    l_s_1.style.display='block';
}

// Validation
(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


var next_signup = document.getElementById("vehicle");
next_signup.style.display='none';



function next_vehicle()
{
    var s = document.getElementById("hide_signup");
    s.style.display='none';
  
    var nsignup = document.getElementById("vehicle");
    nsignup.style.display='block';
}

var plan = document.getElementById("plan");
plan.style.display='none';

function next_plan()
{
    var nvehicle = document.getElementById("hide_vehicle");
    nvehicle.style.display='none';

    var nveh = document.getElementById("plan");
    nveh.style.display='block';
}