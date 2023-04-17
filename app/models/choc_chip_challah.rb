class ChocChipChallah < ApplicationRecord
    belongs_to :order 

    validates :quantity, numericality: { less_than_or_equal_to: 3 }

end 
