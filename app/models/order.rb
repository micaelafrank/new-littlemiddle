class Order < ApplicationRecord
    belongs_to :sale_date
    belongs_to :user 

    has_many :choc_challahs 
    has_many :plain_challahs

    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :email, presence: true
end
