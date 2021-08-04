// We most likely need a front end js file that will run 3 routes (Application, Interview, and Test), after collecting the user input from the newApp handlebar page

const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // Using this template, need to grab the user input values from the application section of newApp
    const first_name = document.querySelector('#firstname-signup').value.trim();

  
    if (first_name && last_name) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add new application.');
      }
    }

    // Using this template, need to grab the user input values from the interview section of newApp
    const first_name = document.querySelector('#firstname-signup').value.trim();

  
    if (first_name && last_name) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add new application.');
      }
    }

    // Using this template, need to grab the user input values from the application section of newApp
    const first_name = document.querySelector('#firstname-signup').value.trim();

  
    if (first_name && last_name) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to add new application.');
      }
    }
  };

  document
  .querySelector('.newapp-form')
  .addEventListener('submit', signupFormHandler);