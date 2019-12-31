class CreateCurencies < ActiveRecord::Migration[6.0]
  def change
    rename_table :currencies, :currenciess
  end
end
