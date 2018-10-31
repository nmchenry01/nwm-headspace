# Get JSON file in same directory and pipe it to jq
# Display property 'sport' on the quiz property
cat jq-example.json | jq '.quiz.sport'

# Return each element in the array 
cat jq-example.json | jq '.[]'

# More or less the same as above
cat jq-example.json | jq 'map(.)'

# Modify one of the keys deeper in the JSON 
cat jq-example.json | jq '.quiz[] | .q1 | { "the-question": .question } + . | del(.question)' 