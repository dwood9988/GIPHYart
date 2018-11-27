//document.ready function\\
$(document).ready(function () {
//onlick function that creates the button
    $("#Submit").on("click", function () {
        event.preventDefault();

        newFood = $("#actualFoods").val().trim();

        newButton = $("#gifButtons").append($("<button>").html("<ins>" + newFood + "</ins>").attr("name", newFood));

        console.log("Added to the DIV!")

        addGifs();
    })
    //function to add gifs to the page\\
    function addGifs() {
        $("button").on("click", function () {

            console.log($(this).attr("name"))

            var food = $(this).attr("name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                food + "&api_key=GQ6BlBv7dj9fF8q1vHfseubUDIljPR8a&limit=10";
//ajax call\\
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var foodImage = $("<img>");

                    foodImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);

                    gifDiv.prepend(foodImage);

                    $("#gifsGoHere").prepend(gifDiv);
                }
            })
        })
    }

})

//the gifs don't appear and the new button isn't created - but I got something put together!\\