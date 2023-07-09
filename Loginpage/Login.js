function login() {
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
  
    fetch('../userdata.json')
      .then(response => response.json())
      .then(data => {
        const users = data.users;
  
        
        const user = users.find(user => user.email === emailInput.value && user.password === passwordInput.value);
  
        if (user) {
          localStorage.setItem('loggedInUser', JSON.stringify(user));
  
          // Redirect
          window.location.href = '../index.html';
        } else {
          // sed fail :(
          alert('Invalid email or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', login);
  