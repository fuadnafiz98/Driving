console.log('from chkindex.js');

auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
    } else {
    }
})

function LogOut() {
    auth.signOut().then(() => {
        console.log('logouting!');
        localStorage.setItem("user1", true);
    });
}