class CreateSaleDates < ActiveRecord::Migration[7.0]
  def change
    create_table :sale_dates do |t|
      t.integer :month 
      t.integer :day
      t.integer :year
      t.timestamps
    end
  end
end
