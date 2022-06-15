class CreateLike < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false

      t.references :likeable, polymorphic: true
      t.timestamps
    end
  end
end
