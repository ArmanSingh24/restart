document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.loading-container').style.display = 'block';
    setTimeout(function() {
        document.querySelectorAll('.loading-container, #startButton').forEach(element => {
    element.style.display = 'none';
});


        document.getElementById('content').classList.remove('hidden');
    }, 4500);
});
document.getElementById('resetButton').addEventListener('click', function() {location.reload();
});
