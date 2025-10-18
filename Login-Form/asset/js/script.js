const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
});

signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
});

// ===== تابع shake =====
function shakeField(input) {
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 300);
}

// ===== اعتبارسنجی فرم Login =====
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]');
    const password = loginForm.querySelector('input[type="password"]');

    let valid = true;

    if (!username.value.trim()) {
        shakeField(username);
        valid = false;
    }

    if (!password.value.trim()) {
        shakeField(password);
        valid = false;
    }

    if (!valid) return;

    alert(`خوش آمدید، ${username.value}!`);
    loginForm.reset();
});

// ===== اعتبارسنجی فرم Sign Up =====
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = signupForm.querySelector('input[type="text"]');
    const email = signupForm.querySelector('input[type="email"]');
    const password = signupForm.querySelector('input[type="password"]');

    let valid = true;

    if (!fullName.value.trim()) {
        shakeField(fullName);
        valid = false;
    }

    if (!email.value.trim()) {
        shakeField(email);
        valid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            shakeField(email);
            valid = false;
        }
    }

    if (!password.value.trim()) {
        shakeField(password);
        valid = false;
    } else if (password.value.length < 6) {
        shakeField(password);
        valid = false;
    }

    if (!valid) return;

    alert(`حساب کاربری برای ${fullName.value} با موفقیت ساخته شد!`);
    signupForm.reset();
});