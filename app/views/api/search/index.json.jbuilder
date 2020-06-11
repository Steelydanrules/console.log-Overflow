@questions.each do |question|
  json.set! question.id do
    json.partial! 'api/search/search', search: search
  end
end
