//domain/.netlify/functions/hello
const items = [
 {
  id: 1, item: "great",
 },
 { id: 2, item: "better", }
]

exports.handler = async function (event, context) {
 return {
  statusCode: 200,
  body: JSON.stringify(items),
 }
}