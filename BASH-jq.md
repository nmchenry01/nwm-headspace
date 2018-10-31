# Bash jq

## Articles

https://stedolan.github.io/jq/tutorial/
https://medium.com/cameron-nokes/working-with-json-in-bash-using-jq-13d76d307c4

## Usage

jq is a powerful tool that lets you read, filter, and write JSON in bash. Underneath the hood, it is implemented in C, so it is wicked fast compared to a functionally similar
script written in Node.js. It is portable, and can be run anywhere that a bash command can be run. jq has built in functions, and a variety of ways to tackle each given problem.

## Code Example

```
# Get JSON file in same directory and pipe it to jq
# Display property 'sport' on the quiz property
cat jq-example.json | jq '.quiz.sport'

# Return each element in the array 
cat jq-example.json | jq '.[]'

# More or less the same as above
cat jq-example.json | jq 'map(.)'

# Modify one of the keys deeper in the JSON 
cat jq-example.json | jq '.quiz[] | .q1 | { "the-question": .question } + . | del(.question)' 
```
