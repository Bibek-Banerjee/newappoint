axios.get("https://crudcrud.com/api/f341954be35548e0bbf347af1bcf6ef9/appintmentdata").then((res) => {
    let j = 0;
    while (j <= res.data.length - 1) {
        createListItem(res.data[j]);
        j++;
    }
}).catch((err) => console.log(err));

document.getElementById("btn").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("num").value;

    axios.post("https://crudcrud.com/api/f341954be35548e0bbf347af1bcf6ef9/appintmentdata", {
        Name: name,
        Email: email,
        Phone_Number: phone
    }).then((res) => console.log(res))
        .catch((err) => console.log(err));

    createListItem({ Name: name, Email: email, Phone_Number: phone });

    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("num").value = "";
});

function createListItem(data) {
    var listItem = document.createElement("li");
    listItem.textContent = `Name: ${data.Name}, Email: ${data.Email}, Phone: ${data.Phone_Number}`;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);

    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function () {
        var updatedName = prompt("Enter updated name:", data.Name);
        var updatedEmail = prompt("Enter updated email:", data.Email);
        var updatedPhone = prompt("Enter updated phone number:", data.Phone_Number);

        listItem.textContent = `Name: ${updatedName}, Email: ${updatedEmail}, Phone: ${updatedPhone}`;
    });
    listItem.appendChild(updateButton);

    document.getElementById("result").appendChild(listItem);
}
