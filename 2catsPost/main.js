const nickname = document.querySelector("#nickname");
const ownerName = document.querySelector("#owner-name");
const onwerContacts = document.querySelector("#owner-contacts");
const sendButton = document.querySelector("#send");

sendButton.addEventListener("click", function(event) {
    event.preventDefault();

    let info = {
        "ownerName" : ownerName.value,
        "petsName" : nickname.value,
        "ownerContancs" : onwerContacts.value
    }

    fetch("https://httpbin.org/post", 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
        body: JSON.stringify(info)
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp.data))
});