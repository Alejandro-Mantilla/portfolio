emailjs.init('XUiDpjtLKmPxqNM6u');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const serviceID = 'dardro05';
    const templateID = 'dardro05';

    const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        from_subject: formData.get('subject'),
        message: formData.get('message')
    };

    console.log(templateParams);

    emailjs.send(serviceID, templateID, templateParams)
    .then(response => {
        console.log('SUCCESS!', response.status, response.txt);
        alert('Message sent succesfully');

        document.getElementById('contact-form').reset();
        setTimeout(() => {
            location.reload();
        }, 1000);
    })
    .catch(error => {
        console.log('FAILED...', error);
        alert('There was an error sending the message');

        document.getElementById('contact-form').reset();
    });
});