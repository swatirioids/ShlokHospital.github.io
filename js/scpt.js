document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const successPopup = document.getElementById('success-popup');
    const closePopupButton = document.getElementById('close-popup');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    
        // Perform form validation
    
        // Simulate sending the form data or submit the form
        
        // Show the success popup
        successPopup.style.display = 'flex';
    
        // Reset the form fields
        form.reset();
    });
    
    closePopupButton.addEventListener('click', function () {
        // Close the success popup
        successPopup.style.display = 'none';
    });
});
