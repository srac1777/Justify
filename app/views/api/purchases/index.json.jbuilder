@purchases.each do |purchase|
  json.set! purchase.id do
    json.extract! purchase, :id, :name, :cost, :purchase_date, :description, :category_id, :user_id
  end
end
json.total_value @total_value