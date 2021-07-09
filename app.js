$(() => {
//this api pulls 20 results at a time with index 0 - 19 i need to iterate through those
let currentGame = 0

$.ajax({
	url: "https://api.rawg.io/api/games?key=a0c636dde4744ca38404b9b629eb23d0&genres=indie",
  type: "GET",

}).then((data) => {

  const openModal = () => {
    $(".title").empty()
    $(".genres").empty()
    $(".screenshots").empty()
    $(".platforms").empty()
    $("#modal").css("display", "block")
    const index = $(event.currentTarget).attr("index")
    $("<h1>").text(data.results[index].name).appendTo(".title")
    //$(".genres").text("Genres: " + data.results[index].genres)
    $(".rating").text("Average Rating: " + data.results[index].metacritic)
    $(".release").text("Release Date: " + data.results[index].released)
    //had to multiply playtime by 5 because their data for that was WAY under average playtime
    $(".playtime").text("How Long to Beat: " + data.results[index].playtime * 5 + " hours")
    //genres loop
    for (let i = 0; i < data.results[index].genres.length; i++) {
      $(".genres").append(data.results[index].genres[i].name + " ")
    }
    $(".genres").prepend("Genres: ")
    //screenshots
    $(".screenshots").append($(`<img src="${data.results[index].short_screenshots[1].image}" />`))
    $(".screenshots").append($(`<img src="${data.results[index].short_screenshots[2].image}" />`))
    $(".screenshots").append($(`<img src="${data.results[index].short_screenshots[3].image}" />`))
    //platforms loop
    for (let i = 0; i < data.results[index].platforms.length; i++) {
      $(".platforms").append(data.results[index].platforms[i].platform.name + " ")
    }
    $(".platforms").prepend("Platforms: ")
  }

  const closeModal = () => {
    $("#modal").css("display", "none")
  }

  for (let i = 0; i < data.results.length; i++) {
    $("<div>").addClass("card" + i).addClass("cardbox").appendTo(".games")
    .css( //style for the cards
    { "background-color": "rgba(1, 1, 1, .95)",
      "margin": "5px",
      "border-radius": "5px",
    }).attr("index", i).click(openModal)
    $("<img>").attr("src", data.results[i].background_image)//.addClass("image" + i)
    .appendTo(".card" + i)
    $("<h4>").text(data.results[i].name).addClass(".cardtext").appendTo(".card" + i)
    //$("<div>").addClass("title").appendTo(".games")
    // $("<div>").text("Game Title").addClass("titletext").appendTo("img")
    //$("<h4>").text(data.results[i].name.appendTo("#modalbox"))
    // $(".card" + i).on("click", (event) => {
    //   console.log(data.results.indexOf(event.currentTarget));
    // })


}
  $("#modal").click(closeModal)
 //$("<h4>").text(data.results[i].name.appendTo("#modalbox"))
console.log(data);

// $("<img>").attr("src", data.results[currentGame].background_image).appendTo(".games");
// $(".next").on("click", () => {
//   currentGame++
//   $("<img>").attr("src", data.results[currentGame].background_image).appendTo(".games");
// })

//console.log(data);


  // console.log(results.results[0].name);
});

})
//a0c636dde4744ca38404b9b629eb23d0
