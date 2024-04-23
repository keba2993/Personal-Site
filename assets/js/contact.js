document
	.getElementById('contactForm')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the form from submitting by default

		// Get form values
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var message = document.getElementById('message').value;

		// Basic validation
		if (!name || !email || !message) {
			alert('Please fill in all fields.');
			return;
		}

		// Create email content
		var emailContent = 'Name: ' + name + '\n';
		emailContent += 'Email: ' + email + '\n';
		emailContent += 'Message: ' + message;

		// You would typically send this data to a server to handle the email sending
		// Example using fetch API to send the data to a server
		fetch('../php/contact.php', {
			method: 'POST',
			body: JSON.stringify({ emailContent: emailContent }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					alert('Message sent successfully.');
					document.getElementById('contactForm').reset();
				} else {
					throw new Error('Error sending message.');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('An error occurred while sending the message.');
			});
	});
