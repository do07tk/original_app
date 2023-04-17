class ListsController < ApplicationController
  def index
    @lilsts = List.all
  end
end
