class Api::V1::MessagesController < ApplicationController
  def index
    random_greeting = Message.order('RANDOM()').first
    render json: random_greeting
  end

  def create
    @message = Message.new(greeting: params[:message][:greeting])
    if @message.save
      render json: @message
    else
      render error: { error: 'Unable to create comments' }
    end
  end

  def message_params
    params.require(:message).permit(:greeting)
  end
end
