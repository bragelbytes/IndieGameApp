$(() => {


$.ajax({
	url: "https://api.rawg.io/api/games?key=a0c636dde4744ca38404b9b629eb23d0&genres=indie",
  type: "GET",
  limit: null
  // results: {
  //   name: "Portal 2"
  // }
}).then((data) => {
  console.log(data);
  //$("<img>").attr("src", data.results[0].background_image).appendTo(".images");
  // console.log(results.results[0].name);
});

})
//a0c636dde4744ca38404b9b629eb23d0
