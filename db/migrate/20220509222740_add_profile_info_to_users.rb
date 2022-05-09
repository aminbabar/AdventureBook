class AddProfileInfoToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :education, :string
    add_column :users, :portfolio, :string
  end
end
