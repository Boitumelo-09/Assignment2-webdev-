function updateDateTime() {
    const now = new Date();

    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    // Format date: e.g. 21 April 2025
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString("en-GB", options);

    // Format time: HH:MM:SS
    const timeString = now.toLocaleTimeString("en-GB");

    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

// Update every second
setInterval(updateDateTime, 1000);

// Run immediately on page load
updateDateTime();
