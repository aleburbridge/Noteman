document.getElementById('noteContent').addEventListener('input', function() {
    this.style.width = '50px';
    this.style.height = '50px';
    this.style.width = this.scrollWidth + 'px';
    this.style.height = this.scrollHeight + 'px';
});

document.addEventListener('click', function() {
    document.getElementById('noteContent').focus();
});

console.log("Noteman was made my alexander bridgeman")