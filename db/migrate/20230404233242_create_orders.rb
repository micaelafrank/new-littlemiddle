class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :firstName
      t.string :lastName
      t.string :email 
      t.string :phone
      t.integer :chocChipFlavor, :default => 0
      t.integer :plainFlavor, :default => 0
      t.integer :donation, :default => 0
      t.integer :sale_date_id
      t.timestamps
    end
  end
end
