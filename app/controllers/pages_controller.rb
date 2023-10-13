class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :personal, :oferta, :agreement ]


  def home

    @head_coach = Coach.find_by(name: "Алёна")
    @coaches = Coach.all.without(@head_coach)

  end
end
