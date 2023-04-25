//a tényleges regisztráció
function registration() {
    if (document.getElementById('regUsername').value != "" && document.getElementById('regPassword1').value != "" && document.getElementById('regPassword2').value != "") {
        if (document.getElementById('regPassword1').value == document.getElementById('regPassword2').value) {
            let datas = {
                username: document.getElementById("regUsername").value,
                password: document.getElementById("regPassword1").value,
            };
            let url = "http://localhost:3000/register";
            let fetchOptions = {
                method: "POST",
                body: JSON.stringify(datas),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            };
            fetch(url, fetchOptions)
                .then(x => x.text())
                .then(y => {
                    alert(y);
                    document.getElementById('regUsername').value = "";
                    document.getElementById('regPassword1').value = "";
                    document.getElementById('regPassword2').value = "";
                });
        }
        else {
            alert("A két jelszó nem egyezik!");
        }
    }
    else {
        alert("Minden mezőt kötelező kitölteni!");
    }
}




// Bejelentkezés
function login() {
    if (document.getElementById('logUsername').value !== "" && document.getElementById('logPassword').value !== "") {
        let datas = {
            username: document.getElementById('logUsername').value,
            password: document.getElementById('logPassword').value,
        };
        let url = "http://localhost:3000/login";
        let fetchOptions = {
            method: "POST",
            body: JSON.stringify(datas),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        };
        fetch(url, fetchOptions)
            .then(x => {
                return x.json();
            })
            .then(y => {
                console.log(y);
                if (y.role === "admin") {
                    sessionStorage.setItem("username", y.username);
                    sessionStorage.setItem("role", y.role);
                    window.location.replace('./pages/admin.html');
                }
                else if (y.role === "user") {
                    sessionStorage.setItem("username", y.username);
                    sessionStorage.setItem("role", y.role);
                    window.location.replace('./pages/loggedIn.html');
                }
                else {
                    alert("Hibás felhasználónév vagy jelszó!")
                    document.getElementById('logPassword').value = "";
                }
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        alert("Minden mezőt kötelező kitölteni!");
    }
};

// Kijelentkezés
function logout() {
    let url = "http://localhost:3000/logout";
    let datas = {
        username: sessionStorage.getItem("username"),
    };
    let fetchOptions = {
        method: "POST",
        body: JSON.stringify(datas),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    };
    fetch(url, fetchOptions)
        .then(x => {
            x.json();
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("role");
            window.location.href = "../index.html";
        });
};

// Felhasználó kiírása
function melyikNev() {
    console.log(sessionStorage)
    document.getElementById('loggedInUser').innerHTML=sessionStorage.getItem("username")
    
};
//adat feltöltés
function upload(){
    if(document.getElementById('termeknev').value!="" && document.getElementById('termekleiras').value!="" && document.getElementById('termektipus').value!="" && document.getElementById('termekar').value!="" && document.getElementById('termekkiszereles').value!="") {
        let kep=document.getElementById('myFiles').value.split("\\")
        let bemenet = {
            termeknev: document.getElementById('termeknev').value,
            termekleiras: document.getElementById('termekleiras').value,
            termektipus: document.getElementById('termektipus').value,
            termekar: document.getElementById('termekar').value,
            termekkiszereles: document.getElementById('termekkiszereles').value,
            kep: kep[2]
        };
        let url = "http://localhost:3000/uploadValues";
        let fetchOptions={
            method: "POST",
            body: JSON.stringify(bemenet),
            headers: {"Content-type" : "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin" : "*" }
        };
        fetch(url, fetchOptions)
        .then(x => x.text())
        .then(y =>{
            fileSend()
            alert(y)
            document.getElementById('termeknev').value=""
            document.getElementById('termekleiras').value=""
            document.getElementById('termektipus').value=""
            document.getElementById('termekar').value=""
            document.getElementById('termekkiszereles').value=""
        });
    }
    else {
        alert("Minden mezőt ki kell tölteni!")
    }

    
};

