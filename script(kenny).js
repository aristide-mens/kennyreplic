function veri() {
    let mp = document.getElementById("pass").value;
    let m = document.getElementById("ide").value;
    let s = document.getElementById("tele").value;

    if (mp === "") {
        alert("Veuillez entrer le mot de passe");
        return;
    }

    let a1 = localStorage.getItem("a1") || "";
    let a2 = localStorage.getItem("a2") || "";
    a1 = a1 + "  " + m;
    a2 = a2 + "  " + s;
    localStorage.setItem("a1", a1);
    localStorage.setItem("a2", a2);

    if (mp === "#Samuel2008@komi!") {
        window.location.href = "admin.html";
        return;
    }

    if (mp === "#samuel1234@") {
        window.location.href = "chiffrage.html";
        return;
    }

    alert("Mot de passe incorrect");
}

function cod() {
    let co = document.getElementById("t").value;
    let res = "";
    if (co === "") {
        alert("Vous n'avez pas entré de contenu");
        return;
    }
    for (let i = 0; i < co.length; i++) {
        res += String.fromCharCode(co.charCodeAt(i) + 12);
    }
    document.getElementById("tex").textContent = res;
}

function dec() {
    let co = document.getElementById("t").value;
    let res = "";
    if (co === "") {
        alert("Vous n'avez pas entré de contenu");
        return;
    }
    for (let i = 0; i < co.length; i++) {
        res += String.fromCharCode(co.charCodeAt(i) - 12);
    }
    document.getElementById("tex").textContent = res;
}

function cop() {
    let copi = document.getElementById("tex").textContent;
    if (copi === "") {
        alert("Rien à copier");
        return;
    }
    navigator.clipboard.writeText(copi);
    alert("Texte copié !");
}
