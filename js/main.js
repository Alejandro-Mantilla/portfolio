/* =============== EMAIL JS =============== */

(function() {
    emiljs.init('Alejandro Mantilla');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = event.target.user_name.value;
    let userEmail = event.target.user_email.value;
    let userMessage = event.target.user_message.value;

    let templateParams = {
        user_name: userName,
        user_email: userEmail,
        user_message: userMessage
    };

    emiljs.send('dardro0511', 'dardro11', templateParams)
    .then(function(response) {
        alert('Your message  was sent successfully: ' + response.status);
    }, function(error) {
        alert('Error sending message: ' + error.text);
    });
})