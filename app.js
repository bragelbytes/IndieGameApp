$(() => {
//this api pulls 20 results at a time with index 0 - 19 i need to iterate through those
let currentGame = 0
let currentPage = 1
//want to implement a sticky nav hence why I made a currentPage variable
$.ajax({
	url: "https://api.rawg.io/api/games?genres=indie&key=a0c636dde4744ca38404b9b629eb23d0&page=" + currentPage,
  type: "GET",

}).then((data) => {
//modal starts by emptying previous modal then fills in with data and styling
  const openModal = () => {
    $(".title").empty()
    $(".genres").empty()
    $(".screenshots").empty()
    $(".platforms").empty()
    $("#modal").css("display", "block")
    const index = $(event.currentTarget).attr("index")
    $("<h1>").text(data.results[index].name).appendTo(".title")
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
//to make the modal close upon being clicked when this is called
  const closeModal = () => {
    $("#modal").css("display", "none")
  }

  for (let i = 0; i < data.results.length; i++) {
    $("<div>").addClass("card" + i).addClass("cardbox").appendTo(".games")
    .css( //style for the cards
    { "background-color": "rgba(1, 1, 1, .95)",
      "margin": "5px",
      "border-radius": "5px",
    }).attr("index", i)
    .hover(function(){ //nice hover function to give the cards more personality
      $(this).css({"background-color": "#62a187",
                  "transform": "translate(8px, 5px)",
                  "box-shadow": "none",
                  "cursor": "pointer"});
    }, function(){
      $(this).css({"background-color": "black",
                   "transform": "none",
                   "box-shadow": "10px 5px 5px rgba(1, 1, 1, .80)",
                   "cursor": "default"});
    }).click(openModal)
    $("<img>").attr("src", data.results[i].background_image)
    .appendTo(".card" + i)
    $("<h4>").text(data.results[i].name).addClass(".cardtext").appendTo(".card" + i)

}
  $("#modal").click(closeModal)
console.log(data);

});

})
//API key:
//a0c636dde4744ca38404b9b629eb23d0
