const passwordInput = document.getElementById("passwordInput");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const progressInner = document.getElementsByClassName("progress")[0];
const feedback = document.getElementById("feedback")

passwordInput.addEventListener('input', updateFeedBackOnUserPassword);

function updateFeedBackOnUserPassword(){
    const passwordValue = passwordInput.value ?? 0;
    const passwordValueLength = passwordValue.length;
    const passwordStrengthMultiplied = passwordMultiplier(passwordValue);

    if(passwordValueLength < 8){
        progressInner.className = "progress-red"
        feedback.textContent = "Should be longer"
    }
    else if(passwordValueLength < 12){
        progressInner.className = "progress-orange"
        feedback.textContent = "Pretty good"
    }
    else if(passwordValueLength > 12){
        progressInner.className = "progress-green"
        feedback.textContent = "Grrrreat!";
    }
    progressBar.style.width = `${passwordStrengthMultiplied}%`;
}

function passwordMultiplier(passwordValue){
    const passwordValueLength = passwordValue.length;
    passwordStrengthMultiplied = passwordValueLength * 5;

    if(passwordStrengthMultiplied > 100) return 100;
    return passwordStrengthMultiplied;
}