json.array! @messages do |message|
  json.message message.message
  if message.image.nil?
    json.url ""
  else
    json.url message.image.url
  end
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
  json.nickname message.user.nickname
  json.id message.id
end