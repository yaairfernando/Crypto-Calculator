class RenameTableCurrenciessToCurrency < ActiveRecord::Migration[6.0]
  def change
    rename_table :currenciess, :currencies
  end
end
