class CreateLists < ActiveRecord::Migration[6.0]
  def change
    create_table :lists do |t|
      t.string  :title, null: false
      t.string  :poster, null: false
      t.integer :date, null: false
      t.text    :text, null: false
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
