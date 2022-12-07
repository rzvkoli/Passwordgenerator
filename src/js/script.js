const CraetePasswordButton = document.getElementById('craete-password-button');
const CopyPasswordButton = document.getElementById('copy-password-button');
const ChangeTypeButton = document.getElementById('change-type-buuton');
const EyeIcon = document.getElementById('eye-icon');
const CopyIcon = document.getElementById('copy-icon');
const ShowPassword = document.getElementById('show-password');

function PasswordGenerator (){
    const password  = Math.random().toString(36).slice(2) + Math.random().toString(36)
    .toUpperCase().slice(2);

    ShowPassword.value = password;
}

PasswordGenerator()

CraetePasswordButton.addEventListener('click' , () => {
    
    const password  = Math.random().toString(36).slice(2) + Math.random().toString(36)
    .toUpperCase().slice(2);

    ShowPassword.value = password;
})

CopyPasswordButton.addEventListener('click' , () => {

    if(ShowPassword.value === ''){
        alert('Please enter your password')
    }else{
        ShowPassword.select();
    
        navigator.clipboard.writeText(ShowPassword.value)

        CopyIcon.classList = 'bi bi-clipboard-check'
    }
})

ChangeTypeButton.addEventListener('click' , () => {
    if(ShowPassword.type === 'password'){
        ShowPassword.type = 'text'
        EyeIcon.classList = 'bi bi-eye'
    }else{
        ShowPassword.type = 'password'
        EyeIcon.classList = 'bi bi-eye-slash'
    }
})