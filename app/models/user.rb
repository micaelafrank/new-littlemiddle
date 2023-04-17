class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :choc_chip_challahs, through: :orders
    has_many :plain_challahs, through: :orders
    validates_confirmation_of :password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :phone, presence: true, numericality: true
end 
