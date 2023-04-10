class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :user_id 
      t.integer :donation, :default => 0
      t.integer :choc_challah_count, :default => 0
      t.integer :plain_challah_count, :default => 0
      t.string :order_date
      # t.integer :sale_date_id 
      t.timestamps
    end
  end
end
