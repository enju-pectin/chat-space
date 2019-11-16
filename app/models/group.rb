class Group < ApplicationRecord
  has_many :group_users 
  has_many :users ,through: :group_users
  validates :name, presence: true, uniqueness: true
  has_many :messages

  def show_latest_message
    if (latest_message = messages.last).present?
      latest_message.message? ? latest_message.message : '画像が投稿されています'
    else
      'まだメッセージはありません'
    end
  end
end
