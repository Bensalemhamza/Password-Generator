
const passwordDisplay = $('#password-display');
const generateButton = $('#generate-password');
const passwordLengthInput = $('#range-input');
const lengthValue = $('#Length-value');
const includeUppercase = $('#include-uppercase');
const includeLowercase = $('#include-lowercase');
const includeNumbers = $('#include-numbers');
const includeSymbols = $('#include-symbols');
// Function to generate a random password
function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let characterSet = '';
    if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characterSet += '0123456789';
    if (includeSymbols) characterSet += '!@#$%^&*()-_=+[]{};:,<.>/?';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return password;
}
// Update displayed length when user changes the slider
passwordLengthInput.change(function() {
    const length = $(this).val();
    lengthValue.text(length);
});
// Generate password on button click
generateButton.click(function() {
    const passwordLength = parseInt(passwordLengthInput.val());
    const includeUpper = includeUppercase.is(':checked');
    const includeLower = includeLowercase.is(':checked');
    const includeNum = includeNumbers.is(':checked');
    const includeSym = includeSymbols.is(':checked');
    
    const newPassword = generatePassword(passwordLength, includeUpper, includeLower, includeNum, includeSym);
    passwordDisplay.val(newPassword);
});
// copy password
const copyIcon = $('.copie');
copyIcon.click(function(){
    const passwordText = passwordDisplay.val();

})



