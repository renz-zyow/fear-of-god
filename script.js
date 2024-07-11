document.addEventListener('DOMContentLoaded', function() {
    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");
    let message = document.getElementById("message");

    signinBtn.onclick = function() {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function() {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

    document.getElementById("signupBtn").addEventListener("click", function() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {
            message.innerHTML = "Email and Password are required";
            message.style.color = "red";
            return;
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]');

        let userExists = users.some(user => user.email === email);

        if (userExists) {
            message.innerHTML = "User already exists!";
            message.style.color = "red";
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            message.innerHTML = "Sign up successful!";
            message.style.color = "green";
            window.location.href = "index.html"; // Redirect to a welcome page
        }
    });

    document.getElementById("signinBtn").addEventListener("click", function() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if (email === "" || password === "") {
            message.innerHTML = " ";
            message.style.color = "white";
            return;
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]');

        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            window.location.href = "index.html";
            message.innerHTML = `Welcome back, ${user.name}!`;
            message.style.color = "green";
            alert("Login complete!")
             
        } else {
            message.innerHTML = "Invalid email or password";
            message.style.color = "red";
        }
        
    });
});
