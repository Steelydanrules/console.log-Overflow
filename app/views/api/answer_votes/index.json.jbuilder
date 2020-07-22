@votes.each do |vote|
  json.set! answer_vote.id do
    json.partial! 'api/answer_votes/answer_vote', answer_vote: answer_vote
  end
end
