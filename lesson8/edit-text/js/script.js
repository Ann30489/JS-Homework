let view = document.getElementById("view"),
    area = document.getElementById("area");
document.body.onkeydown = keyHandler;

function keyHandler(e) {
    if (e.ctrlKey && (e.code === "KeyS" || e.code === "KeyE")) {
        e.preventDefault();
        if (e.code === "KeyS") {
            if (area.style.display) {
                area.style.display = "";
                view.style.display = "block";
                view.textContent = area.value;
            }
        } else {
            if (!area.style.display) {
                area.style.display = "block";
                view.style.display = "none";
                area.value = view.textContent;
            }
        }
    }
}
