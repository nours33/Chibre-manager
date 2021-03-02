json.array! @announces do |announce|
  json.extract! announce, :id
end
