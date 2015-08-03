 define(function(getMySongs) {
  $.ajax({
  url:"songs.json"
 }).done(function (songList) {
   console.log(songList);
    for (var i = 0; i < songList.length; i++) {
     $('div.sidebar_right').append('<p class="songName">'+ songList.songs[i].Track + '</p>');
    }
  })
});



 // define(["songs"], function(getMySongs) {
 //   var outputEl = songs.getOutputElement();

 //   console.log("outputEl", outputEl);

 //   return {
 //     hereIsTheSong: "row, row, row"
 //   };
 // });