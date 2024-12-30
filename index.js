<script>
    document.querySelector('form').addEventListener('submit', function(e) {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        if (username === '' || password === '') {
            alert('من فضلك، أكمل جميع الحقول');
            e.preventDefault();
        }
    });
</script>
