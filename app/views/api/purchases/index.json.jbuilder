@purchases.each_with_index do |purchase, i|
  json.set! purchase.id do
    json.extract! purchase, :id, :name, :cost, :purchase_date, :description, :category_id, :user_id
    json.value @values[i]
  end
end
json.total_value @total_value