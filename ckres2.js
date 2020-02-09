console.log('account.js');
var prev_name, prev_phone, prev_mobile, prev_address, prev_city, prev_code;


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const subBtn = document.getElementById("submit");
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let name = document.getElementById('name').value;
            let fname = document.getElementById('fname').value;
            let mname = document.getElementById('mname').value;
            let nid= document.getElementById('nid').value;
            let code = document.getElementById('pcode').value;
            
            
          db.collection("account").doc(user.uid).update({
            Name: name,
            FatherName: fname,
            MotherName: mname,
            NationalID: nid,
            Postal_Code: code
            }).then(() => {
                console.log('Done');
                window.location.reload();

            });
        });

    } else {
        console.log('not');
        window.alert('Please Login to access Account Details');
        window.location = "../index.html";
    }
});