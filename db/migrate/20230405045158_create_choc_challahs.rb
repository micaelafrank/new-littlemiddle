class CreateChocChallahs < ActiveRecord::Migration[7.0]
  def change
    create_table :choc_challahs do |t|
      t.integer :quantity, :default => 0
      t.timestamps
    end
  end
end
