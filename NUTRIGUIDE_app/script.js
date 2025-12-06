// Simple mock user system (for testing)
class User {
  #users = {}; // private field

  signup(email, password) {
    if (this.#users[email]) return false;
    this.#users[email] = password;
    return true;
  }

  login(email, password) {
    return this.#users[email] === password;
  }
}

const userSystem = new User();

// Example usage
console.log(userSystem.signup("caslaya@gmail.com", "1234")); // true
console.log(userSystem.login("caslaya@gmail.com", "1234"));  // true

console.log(userSystem.users); // undefined (correct: cannot access private)

// Login button event
document.getElementById('login-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;
  const message = document.getElementById('message');

  // 
  if (userSystem.login(email, password)) {
    localStorage.setItem('currentUser', email);
    if (remember) localStorage.setItem('remember', 'true');
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid credentials!";
  }
});

// Signup button event
document.getElementById('signup-btn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  // 
  if (userSystem.signup(email, password)) {
    message.style.color = "green";
    message.textContent = "Account created! Please log in.";
  } else {
    message.style.color = "red";
    message.textContent = "Email already exists!";
  }
});