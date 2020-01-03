class CreateCurencies < ActiveRecord::Migration[6.0]
  def change
    rename_table ("curencies", "currencies")
  end
end
