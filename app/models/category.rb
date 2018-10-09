# == Schema Information
#
# Table name: categories
#
#  id   :bigint(8)        not null, primary key
#  name :string
#

class Category < ApplicationRecord
    has_many :purchases
end
