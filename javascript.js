
var title = $('.title');
var url = $('.url');
var readLinks = $('.read').length;

$('.enter').on('click', function(){
  checkFields();
  createCards();
  totalNumber();
  unreadNumber();
});

function checkFields() {
  $('.error').text('');
  $('.enter').disabled = false;
  if ($('.title').val() === '' || $('.url').val() === '') {
    displayError();
  }
};

function displayError() {
  $('.error').text('Error, enter a valid title and website.');
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
   $(this).parent('li').toggleClass('read changeread');
   $(this).closest('.read-button').toggleClass('colorred');
   readNumber();
   unreadNumber();
 });

 function totalNumber() {
    var count = $('.box').length;
   $('.linkcounter').text('Number of links: '+count);
 }

 function readNumber() {
   var readCount = $('.read').length;
  $('.readcounter').text('Number of read bookmarks: ' +readCount);
 }

function unreadNumber() {
  var unreadCount = $('.box').length - $('.read').length;
  $('.unreadcounter').text('Number of unread bookmarks: ' +unreadCount);
}

$('.right').on('click', '.delete', function(){
  $(this).parent('li').remove();
  totalNumber()
  readNumber();
  unreadNumber();
});

$('.clear').on('click', function(){
  $('.read').remove();
  totalNumber()
  readNumber();
})
