var signupFname=document.getElementById('fname');
var signupLname=document.getElementById('lname');
var signupAge=document.getElementById('age');
var signupGender=document.getElementById('gender');
var signupEmail=document.getElementById('signupEmail');
var signupPassword=document.getElementById('signupPassword');
var showPassword=document.getElementById('showPassword');
var submit=document.getElementById('submit');

var users=[]





// check with regex
const fnameRegex=/^[a-zA-Z][a-zA-Z]{2,14}$/;
const lnameRegex=/^[a-zA-Z][a-zA-Z]{2,14}$/
const ageRegex=/^(18|19|[2-9][0-9])$/
const genderRegex=/^(male|female)$/i
const emailRegex=/^[a-z0-9_]+@[a-z]+\.+com$/
const passwordRegex=/^.{8,20}$/
const regexArray=[fnameRegex,lnameRegex,ageRegex,genderRegex,emailRegex,passwordRegex]
var inputtags=document.querySelectorAll('.form-control')
for (let i = 0; i < inputtags.length; i++) {
    inputtags[i].addEventListener('keyup',function () {
        checkWithRegex(inputtags[i],regexArray[i]);

        if (signupFname.classList.contains('valid') && signupLname.classList.contains('valid')&&signupAge.classList.contains('valid')&&signupGender.classList.contains('valid')&&signupEmail.classList.contains('valid')&&signupPassword.classList.contains('valid')) {
            submit.classList.add('validData')
        } else{
            submit.classList.remove('validData')
        }
        
    })
    
}
function checkWithRegex(input,regex) {
    var testRegex=regex
    if (testRegex.test(input.value)) {
        input.classList.add('valid')
        input.classList.remove('invalid')


    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
        
    }
}

for (let i = 0; i < inputtags.length; i++) {
    if (inputtags[i].classList.contains('valid')) {
        submit.style.backgroundColor='teal'
        
    }
    
}



// =====================    button     =====================


submit.addEventListener('click',function () {
    collectUserData()
    checkIfExist()
    if (submit.classList.contains('validData') && emailHelp.classList.contains('d-none') ) {
        pushUserData()
        window.location.replace('../signin/signin.html')
        
    } else {
        emailHelp.classList.replace('d-none','d-block')
    }

})


// defined global to use it in two functions
var userdata

function collectUserData(){
    userdata={
        signupFname:signupFname.value,
        signupLname:signupLname.value,
        signupAge:signupAge.value,
        signupGender:signupGender.value,
        signupEmail:signupEmail.value,
        signupPassword:signupPassword.value
    };
};



// ============ check if exist   ================
users=JSON.parse(localStorage.getItem('users'))
var emailHelp=document.getElementById('emailHelp')
function checkIfExist() {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].signupEmail);
        console.log(userdata.signupEmail);
        if (users[i].signupEmail===userdata.signupEmail) {
            console.log('exist');

            emailHelp.classList.replace('d-none','d-block')
        } else{
            emailHelp.classList.replace('d-block','d-none')

        }
    }
    
}


function pushUserData() {
    collectUserData()
    users.push(userdata);
    localStorage.setItem('users',JSON.stringify(users))
    
}


