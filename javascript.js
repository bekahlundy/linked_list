

$('.enter').click(function(){
  createCards();
});



function createCards() {
  var title = $('.title').val();
  var url = $('.url').val();

  $('.right').append(`<li class ='box'>

        <div class='title-result'>${title}
        </div>

        <div class='url-result'>${url}
        </div>

        <button class='read-button' type='button'>read
        </button>

        <button class='delete'>delete
        </button>
  </li>`)
  console.log($('.read-button'))

};



$('.right').click('.read-button', function() {
   $('.box').toggleClass('read');
});
