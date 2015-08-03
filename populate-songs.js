$.ajax({
 url:"songs.json"
}).done(function (data) {
  console.log(data);
   for (var i = 0; i < data.length; i++) {
    console.log("string")
      $('div.sidebar_right').append('<p class="songName">'+ data.songs[i].song + '</p>');
    }
    

})

})