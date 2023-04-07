class SaleDate < ApplicationRecord
    # has_many :orders 

    def get_order_date
        date = SaleDate.created_at
        puts "#{self.date.month}/#{self.date.day}/#{self.date.year}"
    end
end
