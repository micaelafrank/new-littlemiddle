class Order < ApplicationRecord
    # belongs_to :sale_date
    belongs_to :user 

    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :email, presence: true
    validates_length_of :phone, in: 7..32, allow_blank: false
    # validates :choc_challah_count, numericality: { only_integer: true }, length: less_than_or_equal_to: 3
    # validates :plain_challah_count, numericality: { only_integer: true }, length: less_than_or_equal_to: 3

    # validate :check_challah_number, on: :create

    validate :maximum_challahs_notmorethan_6, on: :create

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

    def total_order_count
        self.count(:choc_challah_count, :plain_challah_count)
    end

    def maximum_challahs_notmorethan_6 
      if self.choc_challah_count && self.plain_challah_count > 6
        errors.add(:base, "The maximum number of challahs per order is 6")
      end
    end

end
