class CreatePlainChallahs < ActiveRecord::Migration[7.0]
  def change
    create_table :plain_challahs do |t|
      t.integer :order_id
      t.integer :quantity 
      t.timestamps
    end
  end
end
