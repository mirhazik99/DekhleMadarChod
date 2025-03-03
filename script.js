function hatja() {
    alert("Phir Hat Kyu Nahi Raha?");
    document.getElementById("message").innerHTML = "<h1>Chal Nikal Ab!</h1>";
    setTimeout(() => {
        window.close();
    }, 2000);
}
