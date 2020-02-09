console.log('from ckres.js');

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = signupForm['name'].value;
    const email = signupForm['email'].value;
    const number = signupForm['inputNumber'].value;
    const password = signupForm['password'].value;
    const password2 = signupForm['password2'].value;

    if (password.length < 8) window.alert('Password must be more than 8 characters');
    else if (password != password2) window.alert('Password not matching');
    else {
        console.log(email, password, userName, number);

        auth.createUserWithEmailAndPassword(email, password).then(cred => {
            localStorage.setItem("user", true);
            signupForm.reset();
            firebase.auth().onAuthStateChanged(function (user) {
                
                if (user) {
                    console.log(user.uid);
                    db.collection("account").doc(user.uid).set({
                        Name: userName,
                        Email: email,
                        User_Name: userName,
                        Mobile: number,
                        FatherName: "Not Provited",
                        MotherName: "Not Provided",
                        NationalID: "Not Provided",
                        Address: "Not Provided",
                        Postal_Code: "Not Provided"
                    })
                    user.updateProfile({ // <-- Update Method here
                        displayName: userName,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"

                    }).then(function () {
                        var displayName = user.displayName;
                        console.log(displayName);
                        window.alert('Resistration Successful!');
                        location.href = "./resister2.html";
                    }, function (error) {
                            console.log(error);
                    });
                }
            });
        }).catch(function (error) { // * Edited here
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
});