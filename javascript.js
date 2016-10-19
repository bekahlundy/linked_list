var count = 0;
var title = $('.title');
var url = $('.url');

$('.enter').on('click', function(){
  checkFields();
  createCards();
  count++;
  $('.linkcounter').text('Number of links is: '+count);
});

function checkFields() {
  $('.error').text('');
  $('.enter').disabled = false;
  if ($('.title').val() === '' || $('.url').val() === '') {
    displayError();
  }
};


function displayError() {
  $('.error').text('Error, you fd up.');
    $('.enter').button('disabled');
}

function createCards() {
  $('.right').append(`<li class ='box'>

        <div class='title-result'>${title.val()}
        </div>

        <div class='url-result'>${url.val()}
        </div>

        <button class='read-button' type='button'>read
        </button>

        <button class='delete'>delete
        </button>
  </li>`)
};



$('.right').on('click', '.read-button', function() {
   $(this).parent('li').toggleClass('read');
});


$('.right').on('click', '.delete', function(){
  $(this).parent('li').remove();
  count--;
  $('.linkcounter').text('Number of links is: '+count);
});
