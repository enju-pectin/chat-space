json.message @message.message
json.nickname @message.user.nickname
json.created_at @message.created_at.strftime('%Y/%m/%d %H:%M')
if @message.image.nil?
  json.url ""
else
  json.url @message.image.url
end  
json.id @message.id
