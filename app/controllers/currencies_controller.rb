class CurrenciesController < ApplicationController
  def index

  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: { currencies: @currencies }
  end

  # Takes the currency id and the amount owned, returns final calculations
  def calculate

  end
end