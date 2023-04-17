class Order < ApplicationRecord
    # belongs_to :sale_date
    belongs_to :user
    has_many :choc_chip_challahs
    has_many :plain_challahs

    # validates :firstName, presence: true
    # validates :lastName, presence: true
    # validates :email, presence: true
    # validates_length_of :phone, in: 7..32, allow_blank: false
    # validates :total_order_count, on: :create, numericality: {less_than_or_equal_to: 6}
    # validates :get_choc_count, numericality: { less_than_or_equal_to: 3 }
    # validates :get_plain_count, numericality: { less_than_or_equal_to: 3 }

    # def get_order_date
    #     date = Order.sale_date_id
    #     month = SaleDate.find(date).month
    #     day = SaleDate.find(date).day
    #     year = SaleDate.find(date).year
    # end

    def get_choc_count
      chocNum = ChocChipChallah.find_by(order_id: params[:id]).quantity
      puts "i am ordering #{chocNum} chocolate chip challahs!"
    end

    def get_plain_count
      plainNum = PlainChallah.find_by(order_id: params[:id]).quantity
      puts "i am ordering #{plainNum} plain challahs!"
    end


    # def validate_order_count
    #     self.count(:conditions => "choc_challah_count AND plain_challah_count <= 4")
    # end

    # def total_order_count
    #     totalAmt = self.choc_chip_challah_id.quantity + self.plain_challah_id.quantity
    #     puts totalAmt
    # end

    # def maximum_challah_amt 
    #   if self.choc_chip_challah_id.quantity && self.plain_challah_id.quantity > 6
    #     errors.add(:base, "Each order is limited to 6 challahs per week per order")
    #   end
    # end

end
