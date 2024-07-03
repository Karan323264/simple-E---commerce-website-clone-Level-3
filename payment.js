// JavaScript to handle the notification
document.querySelector('.payButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Show the custom notification
    document.getElementById('successNotification').classList.remove('hidden');
});

// Handle closing the notification
document.getElementById('closeNotification').addEventListener('click', function() {
    document.getElementById('successNotification').classList.add('hidden');
});