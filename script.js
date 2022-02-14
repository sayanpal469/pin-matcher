function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}


document.getElementById('key-pad').addEventListener(
    'click',

    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-number');

        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = ''
            }
        } else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }
        
    }
)

// pin verify

function verifyPin() {
    const currentPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;

    const notifyError = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');

    if (currentPin == typedNumbers) {
        notifySuccess.style.display = 'block';
        notifyError.style.display = 'none';
    } else {
        notifyError.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}