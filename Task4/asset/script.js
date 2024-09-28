function addItem() {
    const newItem = document.getElementById("newItem");
    if (newItem.value.trim() !== "") {
        const itemList = document.getElementById("itemList");
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = newItem.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "btn btn-delete";
        deleteBtn.onclick = function() {
            itemList.removeChild(li);
        };
        li.appendChild(deleteBtn);
        itemList.appendChild(li);
        newItem.value = ""; 
        newItem.focus(); 
    }
}