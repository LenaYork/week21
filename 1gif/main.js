const startButton = document.querySelector("#startSearch");

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    const userQuery = document.querySelector("#userQuery").value;
    console.log(userQuery);
    const cardsArea = document.querySelector("#cards");
    let gifs; //для полученных гифок

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=695GCQqhhzM8LslzxYWG9tueVGbwz1iY&q=${userQuery}&limit=5&offset=0&rating=g&lang=en`
    //не работает
    //,
    //    {
    //        mode: 'cors',
    //        headers: {
    //           'Access-Control-Allow-Origin':'*'
    //       }
    //    }
)
    .then(response => response.json())
    // .then(resp => console.log(resp))
    .then(resp => {
        gifs = resp.data;
        console.log(gifs);


        for (elem of gifs) {
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            cardsArea.appendChild(card);
            console.log(elem.embed_url);

            // let cardUrl = elem.url;
            let cardUrl = `https://i.giphy.com/media/${elem.id}/giphy.webp`;
            let pic = document.createElement("img");
            pic.setAttribute("src", cardUrl);
            card.appendChild(pic);
        }

    })
;


});