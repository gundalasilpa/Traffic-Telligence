document.getElementById('trafficForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const randomVolume = Math.floor(Math.random() * 1000) + 100;
    window.location.href = `result.html?result=${randomVolume}`;
});
