@purchases.each do |purchase|
  json.set! purchase.id do
    json.extract! playlist, :id, :name, :cost, :purchase_date, :description, :category_id, :user_id
  end
end