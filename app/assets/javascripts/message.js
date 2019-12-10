$(function(){
  var url = location.href
  function buildHTML(message){
    var html = `
    <div class="message" data-message-id= ${message.id} >
      <div class="message__info">
        <p class="message__info__user">
          ${message.nickname}
        </p><span></span>
        <p class="message__info__timestamp">
          ${message.created_at}
        </p>
      </div>
        <p class="message__text">
        ${message.message}
        </p>
      <img class="message__text__image" src="${message.url}" alt="" width="400px" height="400px">
    </div>`
    return html
  }
  $('#new_message').on( 'submit' , function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');

  $.ajax({
    url: url,
    type: 'POST',
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    $('form')[0].reset();
    $('.submit-btn').prop('disabled', false);
  })
  .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
});
var reloadMessages = function() {
  last_message_id = $('.message:last').data('message-id');
  $.ajax({
    url: "api/messages",
    type: 'get',
    dataType: 'json',
    data: {id: last_message_id }
  })
  .done(function(messages) {
    var insertHTML = '';
    $.each(messages, function(i, message) {
      insertHTML += buildHTML(message);
    });
    $('.messages').append(insertHTML);
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
   })
  .fail(function() {
    alart('error');
    });
  };
  if(document.URL.match('messages')) {
    setInterval(reloadMessages, 4000);
  }
});