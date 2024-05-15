var range = document.getElementById("length-range");
var screen = document.getElementById("password-input");
var upper = document.getElementById("uppercase-checkbox");
var lower = document.getElementById("lowercase-checkbox");
var checkbox3 = document.getElementById("symbol-checkbox");


function rangeChange() {
    document.getElementById("rValue").innerHTML = `Password Length ${range.value}`;
    return range.value;
  }

 
function generate() {
    let alphabets = "";
    if (!upper.checked && !lower.checked && !checkbox3.checked) {
        screen.value = "At least select one option";
    } else {
        if (upper.checked) {
            alphabets += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (lower.checked) {
            alphabets += "abcdefghijklmnopqrstuvwxyz";
        }
        if (checkbox3.checked) {
            alphabets += " ~`!@#$%^&*()_+=-><::|\\ ";
        }
        var allPassword = "";
        for (var i = 0; i < range.value; i++) {
            var randomValue = Math.floor(Math.random() * alphabets.length);
            allPassword += alphabets[randomValue];
        }
        screen.value = allPassword;
    }
}
