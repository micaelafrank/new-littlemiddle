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
    # validates :choc_challah_count, numericality: { only_integer: true }, length: less_than_or_equal_to: 3
    # validates :plain_challah_count, numericality: { only_integer: true }, length: less_than_or_equal_to: 3

    # validate :check_challah_number, on: :create
    # validate :validate_order_count, on: :create

    private

    # def get_order_date
    #     date = Order.sale_date_id
    #     month = SaleDate.find(date).month
    #     day = SaleDate.find(date).day
    #     year = SaleDate.find(date).year
    # end


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
