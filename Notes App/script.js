function getAndUpdate() {
    console.log("Updating the list...")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    update()
}
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    }
    //Populate the table  
    let tableBdoy = document.getElementById('tableBdoy');
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str +=
            `<tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button  class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
              </tr>`;
    });
    tableBdoy.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
    console.log("deleted", itemIndex)
    itemsJsonArrayStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    // Delete Item index
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    update();
}

function clearStorage() {
    if (confirm("Do you really want to clear?"))
        console.log("Clear sto")
    localStorage.clear();
    update()
}