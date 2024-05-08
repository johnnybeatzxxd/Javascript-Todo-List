const itemsList = document.getElementById("items-list");
let items = ["code", "sleep", "eat", "cry"];

function render() {
    for (let [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "5px";
        container.style.marginTop = "10px";

        var text = document.createElement("p");
        text.textContent = item;
        text.style.marginLeft = '10px';
        text.style.display = "inline";


        deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.style.marginLeft = "30px";
        deleteButton.style.display = "inline";
        deleteButton.onclick = () => {
            console.log(`${idx} clicked`)
        }

        container.appendChild(text);
        container.appendChild(deleteButton);
        itemsList.appendChild(container);
    }
}
render()