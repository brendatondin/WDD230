const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
    if (input.value) {
        const items = document.createElement("li");
        const chapters = document.createElement("span");
        const deletebtn = document.createElement("button");

        chapters.innerHTML = input.value;
        items.append(chapters, deletebtn);
        deletebtn.textContent = "❌";
        list.appendChild(items);

        deletebtn.addEventListener("click", () => list.removeChild(items));
        input.focus();
        input.value = "";
    }
});