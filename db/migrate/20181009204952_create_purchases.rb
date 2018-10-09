class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.string :name, null:false
      t.string :description, null:false
      t.integer :cost, null:false
      t.integer :user_id, null:false
      t.integer :category_id, null:false
      t.date :purchase_date, null:false
    end
    add_index :purchases, :name
    add_index :purchases, :user_id
    add_index :purchases, :category_id
  end
end
