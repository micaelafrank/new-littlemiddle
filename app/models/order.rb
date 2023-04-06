class Order < ApplicationRecord
    belongs_to :sale_date
    # belongs_to :user 

    has_many :choc_challahs 
    has_many :plain_challahs

    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :email, presence: true
    validates :choc_challah_count, numericality: { only_integer: true }
    validates :plain_challah_count, numericality: { only_integer: true }

    validate :total_order_count, on: :create

    def total_order_count
        self.count(:conditions => "choc_challah_count AND plain_challah_count <= 4")
    end

    with_options do |order|
        order.validates :choc_challah_id, length: { minimum: 10 }
        admin.validates :email, presence: true
    end

end
