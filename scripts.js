function showLoginForm(userType) {
    const studentLoginForm = document.getElementById('student-login');
    const adminLoginForm = document.getElementById('admin-login');
    const overlay = document.getElementById('overlay');

    if (userType === 'student') {
        studentLoginForm.style.display = 'block';
        adminLoginForm.style.display = 'none';
        overlay.style.display = 'block';
    } else {
        studentLoginForm.style.display = 'none';
        adminLoginForm.style.display = 'block';
        overlay.style.display = 'block';
    }
}

document.addEventListener('click', function (event) {
    const studentLoginForm = document.getElementById('student-login');
    const adminLoginForm = document.getElementById('admin-login');
    const overlay = document.getElementById('overlay');

    if (event.target === overlay) {
        studentLoginForm.style.display = 'none';
        adminLoginForm.style.display = 'none';
        overlay.style.display = 'none';
    }
});
