const play = document.getElementById("play-button")


play.onclick = (e) => {
    e.preventDefault();
    const nameval= document.getElementById("username").value
const namevalue = document.getElementById("name").value
    if (nameval.length > 0 && namevalue.length > 0) {

        location.href = "./instruction.html";
        localStorage.setItem("nickname", nameval);
        localStorage.setItem("actname", namevalue);
    } else {
        alert("Please enter your name and nickname");
    }
};