document.getElementById('submit-button').addEventListener('click', function () {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const gender = [...genderElements].map(el => el.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
        alert('Please fill in all required fields.');
        return;
    }
    const selectedValues = [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Date of Birth: ${dob}`,
        `Country: ${country}`,
        `Gender: ${gender.join(', ')}`,
        `Profession: ${profession}`,
        `Email: ${email}`,
        `Mobile Number: ${mobile}`
    ];
    const popupList = document.getElementById('popup-list');
    popupList.innerHTML = '';
    selectedValues.forEach(value => {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        popupList.appendChild(listItem);
    });
    document.getElementById('popup').style.display = 'block';
});
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('survey-form').reset();
}

