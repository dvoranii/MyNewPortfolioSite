// Form validation

const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorEmail2 = document.getElementById('error-email-2');

form.addEventListener('submit', (e) => {
    
    let mailFormat =/^\S+@\S+\.\S+$/;

    // nothing entered in name field
    if (name.value === '' || name.value == null){
        e.preventDefault();
       errorName.classList.add('display');
       
    }

    // nothing entered in email field
    if(email.value === '' || email.value == null){
        e.preventDefault();
        errorEmail.classList.add('display');
        if(errorEmail2.classList.contains('display')){
            errorEmail2.classList.remove('display');
        }
        
    }   
    //incorrect email entered
    if (!email.value.match(mailFormat) && (email.value !== '' || email.value == null)){
        e.preventDefault();
        errorEmail2.classList.add('display');
        if(errorEmail.classList.contains('display')){
            errorEmail.classList.remove('display');
        }

        
    }
})



