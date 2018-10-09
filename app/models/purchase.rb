# == Schema Information
#
# Table name: purchases
#
#  id            :bigint(8)        not null, primary key
#  name          :string           not null
#  description   :string           not null
#  cost          :integer          not null
#  user_id       :integer          not null
#  category_id   :integer          not null
#  purchase_date :date             not null
#

class Purchase < ApplicationRecord
    validates_presence_of :name, :description, :cost, :user_id, :category_id, :purchase_date

    belongs_to :user
    belongs_to :category
end
