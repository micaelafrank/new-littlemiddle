class OrderSerializer < ActiveModel::Serializer
  has_many :choc_chip_challahs
  has_many :plain_challahs
  belongs_to :user
  
  attributes :id, :user_id, :order_date, :donation 
end
