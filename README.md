## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null:false,unique:true,index:true|
|email|string|null:false|
|password|string|null:false|
### Association
- has_many :groups , through:  :groups_users
- has_many :messages
- has_many :groups_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true,index:true|
### Association
- has_many :users , through: :groups_users
- has_many :messages
- has_many :groups_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|string||
|image|string||
|user_id|references|null:false, foreign_key: true|
|group_id|references|null:false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
