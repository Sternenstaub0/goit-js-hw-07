document
  .querySelector('.login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const email = formElements.email.value.trim();
    const password = formElements.password.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);
    event.target.reset();
  });
