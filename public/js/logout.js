// Event listener for the logout button, destroys the users session data and returns to the homepage page
// Homepage can display different things depending on login status

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
document.querySelector('#logout').addEventListener('click', logout);