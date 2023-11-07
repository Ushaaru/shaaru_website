document.addEventListener("DOMContentLoaded", function () {
    const otpInputs = document.querySelectorAll(".otp-input");
    const verifyBtn = document.getElementById("verifyBtn");
    const message = document.getElementById("message");

    const correctOTP = "6372"; // Change this to your desired OTP.

    for (let i = 0; i < otpInputs.length; i++) {
        otpInputs[i].addEventListener("input", function () {
            if (this.value.length === 1 && i < otpInputs.length - 1) {
                otpInputs[i + 1].focus();
            }
        });

        otpInputs[i].addEventListener("keydown", function (e) {
            if (e.key === "Backspace" && i > 0 && this.value.length === 0) {
                otpInputs[i - 1].focus();
            }
        });
    }

    verifyBtn.addEventListener("click", function () {
        const enteredOTP = Array.from(otpInputs).map((input) => input.value).join("");
        if (enteredOTP === correctOTP) {
            message.textContent = "Your answer is correct!";
        } else {
            message.textContent = "Incorrect answer. Please try again.";
        }
    });
});

