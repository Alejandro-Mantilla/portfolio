/* =============== EMAIL JS =============== */

(function() {
    emiljs.init('gmailsend');
})();

document.getElementById('contact-info').addEventListener('submit', function(event) {
    event.preventDefault();

    let templateParams = {
        user_name: event.target.user_name.value,
        user_email: event.target.user_email.value,
        message: event.target.message.value,
    };

    emailjs.send('dardro1105', 'dardro05', templateParams)
        .then(function(response) {
            alert('Message sent successfully: ' + response.status);
        }, function(error) {
            alert('Error sending message: ' + error.text);
        });
})