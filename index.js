let ison = false;
let juston = false;
let line = "";
page = document.getElementById("page");
page.value = localStorage.getItem("notes")||[]
function bullet() {
    if (ison) {
        ison = false;
        juston = false;
    }
    else {
        ison = true;
        juston = true;
    }
}

page.addEventListener("keydown", (event) => {
    line += event.key;
    if (juston && event.key != "Enter" && !line.startsWith("•")) {
      juston = false;
      page.value += "• ";
    }
    if (event.key == "Enter" && ison) {
            event.preventDefault();
            page.value += "\n• ";
        line = "• ";
    }
    else if (event.key == "Enter") {
        line = "";
    }
});
page.addEventListener("keyup", (event) => {
    localStorage.setItem("notes", page.value);
})

function changeMode(type) {
    if (type == "light") {
        document.getElementById("lightMode").style.backgroundColor =
            "rgb(58, 69, 66)";
                document.getElementById("darkMode").style.backgroundColor =
                  "transparent";
        document.body.style.backgroundColor = "white";
        page.style.backgroundColor = "white";
        page.style.color = "black";
    }
    else {
                document.getElementById("darkMode").style.backgroundColor =
                  "rgb(58, 69, 66)";
                document.getElementById("lightMode").style.backgroundColor =
                  "transparent";
        document.body.style.backgroundColor = "#131224";
        page.style.backgroundColor = "#131224";
        page.style.color = "white";
    }
}

