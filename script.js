document.addEventListener('DOMContentLoaded', () => {
    const photoContainer = document.getElementById('photoContainer');
    const toggleButton = document.getElementById('togglePhotos');
    const dateTimeDisplay = document.getElementById('dateTime');

    // Toggle photo container visibility
    toggleButton.addEventListener('click', () => {
        photoContainer.style.display = photoContainer.style.display === 'none' ? 'flex' : 'none';
        toggleButton.textContent = photoContainer.style.display === 'none' ? 'Show Photos' : 'Hide Photos';
    });

    // Update date and time in WAT (UTC+1)
    function updateDateTime() {
        const now = new Date();
        const watOffset = 1 * 60; // WAT is UTC+1
        const localOffset = now.getTimezoneOffset();
        const watTime = new Date(now.getTime() + (watOffset + localOffset) * 60000);
        dateTimeDisplay.textContent = watTime.toLocaleString('en-US', { timeZone: 'Africa/Lagos', hour12: true });
    }

    // Initial call and update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});