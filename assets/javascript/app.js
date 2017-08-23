
$(document).ready(function(){

    $('button').on('click', function() {
        var animal = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=1567b5c826224bba83fc5265953c257f&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var animalImage = $('<img/>');
                    animalImage.addClass('anImg')
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    animalImage.attr('data-still', results[i].images.fixed_height_still.url)
                    animalImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
                    var state = $(this).attr('data-state'); 
                    if (state == 'still') {
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('data-state', 'animate');
                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var animals = [''];

        $('#theButton').on('click', function(){
            var animalButton = $("#gif-input").val();
            var newButton = $("<button/>").addClass( "btn btn-default animal").attr('data-name',animalButton).html(animalButton);   
            $("#animalbuttons").append(newButton);

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=1567b5c826224bba83fc5265953c257f&limit=10";
                console.log(animalButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $('<div/>');
                    var p =$('<p/>');
                    p.html('Rating:' + results[i].rating);
                    var animalImage = $('<img/>');
                    animalImage.addClass('anImg')
                    animalImage.attr('src', results[i].images.fixed_height_still.url);
                    animalImage.attr('data-still', results[i].images.fixed_height_still.url)
                    animalImage.attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', 'still');
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
                    var state = $(this).attr('data-state'); 

                    if (state == 'still') {
                    $(this).attr('src', $(this).data('animate'));
                    $(this).attr('data-state', 'animate');
                    } else {  
                    $(this).attr('src', $(this).data('still'));
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});