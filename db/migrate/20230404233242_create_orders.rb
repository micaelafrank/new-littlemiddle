class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :firstName
      t.string :lastName
      t.string :email 
      t.string :phone
      t.integer :donation, :default => 0
      t.integer :choc_challah_id
      t.integer :plain_challah_id
      t.integer :sale_date_id
      t.timestamps
    end
  end
end
