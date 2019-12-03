$(function(){
  function buildHTML(message){
    if (message.image.url != null) {
      var html = `
      <div class="message">
      <div class="message__info">
      <p class="message__info__user">
      ${message.nickname}
      </p><span></span><p class="message__info__timestamp">
      ${message.created_at}
      </p>
      </div>
      <p class="message__text">
      </p><p class="message__text__content">
      ${message.message}
      </p>
      <img class="message__text__image" src="${message.image.url}" alt="" width="400px" height="400px">
      <p></p>
      </div>`
    } else {
      var html = `
      <div class="message">
      <div class="message__info">
      <p class="message__info__user">
      ${message.nickname}
      </p><span></span><p class="message__info__timestamp">
      ${message.created_at}
      </p>
      </div>
      <p class="message__text">
      </p>
      <p class="message__text__content">
      ${message.message}
      </p> 
      <p></p>
      </div>`
    }
    return html
  }


  $('#new_message').on( 'submit' , function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
})
})