const nickname = document.querySelector("#nickname");
const ownerName = document.querySelector("#owner-name");
const onwerContacts = document.querySelector("#owner-contacts");
const sendButton = document.querySelector("#send");

//не работает((
//let formDatas = new FormData(document.querySelector("#catsOwners"));
//console.log(formDatas);



sendButton.addEventListener("click", function(event) {
    event.preventDefault();

    //не работает тоже((
    // let catsOwners = document.querySelector("#catsOwners");

    // let info = {
    //     "ownerName" : ownerName.value,
    //     "petsName" : nickname.value,
    //     "ownerContacts" : onwerContacts.value
    // }

    let formData = new FormData();
    formData.append("ownerName", ownerName.value);
    formData.append("petsName", nickname.value);
    formData.append("ownerContacts", onwerContacts.value);

    fetch("https://httpbin.org/post", 
    {
        method: "POST",
        // body: new FormData(catsOwners)
        body: formData
    })
    .then(resp => resp.json())
    .then(resp => console.log(resp.data))
});