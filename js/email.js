emailjs.init('XUiDpjtLKmPxqNM6u');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const serviceID = 'dardro05';
    const templateID = 'dardro05';

    emailjs.send(serviceID, templateID, {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message')
    })
    .then(response => {
        console.log('SUCCESS!', response.status, response.txt);
        alert('Message sent succesfully');
    })
    .catch(error => {
        console.log('FAILED...', error);
        alert('There was an error sending the message');
    });
});