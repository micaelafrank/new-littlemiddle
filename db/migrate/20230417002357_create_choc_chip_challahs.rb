class CreateChocChipChallahs < ActiveRecord::Migration[7.0]
  def change
    create_table :choc_chip_challahs do |t|
      t.integer :order_id
      t.integer :quantity, :default => 0
      t.timestamps
    end
  end
end
