$(function(){
  $(".form1").submit(function(event){
    var words = $("#input").val().split(" ");
    var threeLetters = [];

    words.forEach(function(word) {
      if(word.length >= 3) {
        threeLetters.push(word);
      }
    });

    words = words.concat(threeLetters.reverse());
    console.log(words);


    event.preventDefault();
  });
});
