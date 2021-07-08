$(() => {
//this api pulls 20 results at a time with index 0 - 19 i need to iterate through those
let currentGame = 0

$.ajax({
	url: "https://api.rawg.io/api/games?key=a0c636dde4744ca38404b9b629eb23d0&genres=indie",
  type: "GET",

}).then((data) => {

  const openModal = () => {
    $("#modal").css("display", "block")
  }

  for (let i = 0; i < data.results.length; i++) {
    $("<div>").addClass("card" + i).appendTo(".games")
    .css( //style for the cards
    { "background-color": "black",
      "margin": "2px",
      "border-radius": "5px",
    }).click(openModal)
    $("<img>").attr("src", data.results[i].background_image)//.addClass("image" + i)
    .appendTo(".card" + i)
    $("<h4>").text(data.results[i].name).addClass(".cardtext").appendTo(".card" + i)
    //$("<div>").addClass("title").appendTo(".games")
    // $("<div>").text("Game Title").addClass("titletext").appendTo("img")
}



// $("<img>").attr("src", data.results[currentGame].background_image).appendTo(".games");
// $(".next").on("click", () => {
//   currentGame++
//   $("<img>").attr("src", data.results[currentGame].background_image).appendTo(".games");
// })


  console.log(data);

  // console.log(results.results[0].name);
});

})
//a0c636dde4744ca38404b9b629eb23d0
