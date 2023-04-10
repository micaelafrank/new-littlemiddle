class CreateDonations < ActiveRecord::Migration[7.0]
  def change
    create_table :donations do |t|
      t.string :org_name
      t.string :org_photo
      t.text :org_description
      t.string :org_url 
      t.timestamps
    end
  end
end
