







$('.enter').click(function(){
  var title = $('.title').val();
  var url = $('.url').val();
$('.right').append(`<li><div class='title'>${title}</div>
                      <div class='url'>${url}</div>
                      <button class='read'>read</button>
                      <button class='delete'>delete</button></li>`)
});

$(.'')
