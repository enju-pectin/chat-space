class MessagesController < ApplicationController
  before_action :set_group 

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @members = @group.users
  end

  def create
    @message = Message.create(message: message_params[:message], image: message_params[:image], user_id: current_user.id, group_id: set_group[:id])
    respond_to do |format|
        format.html { redirect_to group_messages_path, notice: "メッセージを送信しました"}
        format.json
      end
    end

  private

  def message_params
      params.require(:message).permit(:message, :image)
  end

  def set_group 
    @group = Group.find(params[:group_id])
  end

end
