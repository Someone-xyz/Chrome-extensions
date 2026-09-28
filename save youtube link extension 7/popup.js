const linkInp = document.getElementById("websiteLink");
const saveBtn = document.getElementById("saveBtn");
const showsavedItm = document.getElementById("showsavedItm");
let arr = [];
saveBtn.addEventListener('click', () => {
    const webLink = linkInp.value;
    if (webLink) {
        arr.push(webLink);
        localStorage.setItem("websiLinks", JSON.stringify(arr));
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', webLink);
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('id', 'linkers');
        linkElement.innerText = webLink;
        showsavedItm.appendChild(linkElement);
        linkElement.style.display = "block";
        linkElement.style.marginTop = "10px";
        linkElement.style.color = "white";
        linkElement.style.listStyle = 'none';
        let delBtn = document.createElement('button');
        delBtn.innerText = "Delete Link";
        delBtn.style.marginLeft = "10px";
        delBtn.style.padding = "5px 10px";
        delBtn.style.backgroundColor = "#ff4d4d";
        delBtn.style.color = "white";
        delBtn.style.border = "none";
        delBtn.style.cursor = "pointer";
        linkElement.appendChild(delBtn);
        linkInp.value = "";
    } else if (linkInp.value === "") {
        alert("Please enter a valid link");
    }
})
if (localStorage.getItem('websiLinks')) {
    arr = JSON.parse(localStorage.getItem('websiLinks'));
    arr.forEach((link, index) => { 

        // wrapper div
        let wrapper = document.createElement("div");

        // anchor tag
        let linkElement = document.createElement("a");
        let finalLink = link;

        if (!link.startsWith("http://") &&
            !link.startsWith("https://")) {

            finalLink = "https://" + link;
        }
        linkElement.href = finalLink;
        linkElement.target = "_blank";
        linkElement.innerText = link;

        linkElement.style.color = "yellow";
        linkElement.style.marginRight = "10px";

        // delete button
        let delBtn = document.createElement("button");

        delBtn.innerText = "Delete Link";

        delBtn.style.padding = "5px 10px";
        delBtn.style.backgroundColor = "#ff4d4d";
        delBtn.style.color = "white";
        delBtn.style.border = "none";
        delBtn.style.cursor = "pointer";

        // delete logic
        delBtn.addEventListener("click", () => {

            // array se delete
            arr.splice(index, 1);

            // localStorage update
            localStorage.setItem("websiLinks", JSON.stringify(arr));

            // UI se remove
            wrapper.remove();
        });

        // wrapper me add
        wrapper.appendChild(linkElement);

        wrapper.appendChild(delBtn);

        // main div me add
        showsavedItm.appendChild(wrapper);

    });
} else {
    showsavedItm.innerText = "No saved links yet.";
}