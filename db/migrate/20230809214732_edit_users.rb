class EditUsers < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :fname, :first_name
    rename_column :users, :lname, :last_name
    add_column :users, :gender, :string, null: false
    add_column :users, :birthday, :date, null: false
  end
end
