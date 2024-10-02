const validUsers = {
    "placement login": [
        { "username": "placement1", "password": "placement123" }
    ],
    "Deo login": [
        { "username": "Deo1", "password": "Deo123" },
        { "username": "Deo2", "password": "Deo234" }
    ],
    "admin login": [
        { "username": "admin1", "password": "admin123" },
        { "username": "admin2", "password": "admin234" }
    ],
    "student login": [
        { "username": "22FE1A6107", "password": "22FE1A6107" },
        { "username": "22FE1A6124", "password": "22FE1A6124" },
        { "username": "22FE1A6134", "password": "22FE1A6134" },
        { "username": "22FE1A6136", "password": "22FE1A6136" }
    ]
};

function validateLogin(userType) {
    console.log(`Validating login for: ${userType}`); // Debug log

    // Get input values based on userType
    const enteredUsername = document.getElementById(`username${userType === 'placement' ? '1' : userType === 'deo' ? '2' : userType === 'admin' ? '3' : '4'}`).value;
    const enteredPassword = document.getElementById(`password${userType === 'placement' ? '1' : userType === 'deo' ? '2' : userType === 'admin' ? '3' : '4'}`).value;

    // Get the error message element based on userType
    const errorMessage = document.getElementById(`error-message${userType === 'placement' ? '1' : userType === 'deo' ? '2' : userType === 'admin' ? '3' : '4'}`);

    console.log(`Entered Username: ${enteredUsername}, Entered Password: ${enteredPassword}`); // Debug log

    let isValidUser = false;

    // Loop through each user in the specific user type
    for (const user of validUsers[`${userType} login`]) {
        if (user.username === enteredUsername && user.password === enteredPassword) {
            isValidUser = true;
            break; // Exit the loop once a match is found
        }
    }

    if (isValidUser) {
        // If credentials match, access is granted
        errorMessage.style.color = "green";
        errorMessage.textContent = "Access granted!";

        // Redirect to the respective HTML file
        const redirectUrl = userType === 'placement' ? 'placement.html' :
                            userType === 'deo' ? 'deo.html' :
                            userType === 'admin' ? 'admin.html' :
                            'index2.html'; // Default to student.html

        setTimeout(() => {
            window.location.href = redirectUrl; // Redirect after a short delay
        }, 1000); // Redirects after 1 second
    } else {
        // If credentials do not match, display an error
        errorMessage.style.color = "red";
        errorMessage.textContent = "Username or password is incorrect.";
    }

    // Prevent form submission
    return false; 
}
