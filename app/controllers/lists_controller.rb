class ListsController < ApplicationController
  def index
    @lists = List.all
    # @list = List.find(params[:id])
    # @comment = Comment.new
    # @comments = @list.comments.includes(:user)
  end

  def new
    @list = List.new
  end

  def create
    list = List.new(list_params)
    if list.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @list = List.find(params[:id])
  end

  private

  def list_params
    params.require(:list).permit(:image, :title, :poster, :date, :text).merge(user_id: current_user.id)
  end
end
