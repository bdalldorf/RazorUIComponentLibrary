// THIS FILE SHOULD BE LOADED IN THE INDEX.html FILE

function createAlert(message) {
    alert(message);
}

function createPrompt(question) {
    return prompt(question);
}



// DOM ELEMENT FUNCTIONS

function focusOnElement(element) {
    element.focus();
}

function setElementTextByID(id, text) {
    document.getElementById(id).innerText = text;
}

// END ELEMENT FUNCTIONS


// MASKING FUNCTIONS

function addIntegerMask(element) {
    element.addEventListener('input', function (e) {
        var currentNumber = e.target.value;
        var currentNumberlength = currentNumber.length;

        // Don't let the number entered go over 9 digits
        if (currentNumberlength < 10) {
            // strip off the zero if it is the first number
            if (currentNumber[0] === '0' && currentNumberlength > 1) {
                currentNumber = currentNumber.slice(1);
            }
            var x = currentNumber.replace(/\D/g, '').match(/^\d+$/);
            e.target.value = x;
        }
        else {
            e.target.value = currentNumber.substring(0, 9);
        }
    });
}

function addPhoneMask(element) {
    //(555) 555-5555
    element.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

    });
}

function addSSNNumberMask(element) {
    //xxx-xx-xxxx
    element.addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');

    });
}

// END MASKING FUNCTIONS