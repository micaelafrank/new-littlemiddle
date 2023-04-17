class ChocChipChallahSerializer < ActiveModel::Serializer
  belongs_to :order 
  
  attributes :id, :order_id, :quantity 
end
