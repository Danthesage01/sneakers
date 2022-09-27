export const formatPrice = (price) => {
 let formattedPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
 }).format((price / 100).toFixed(2))
 return formattedPrice
}


export const getUniqueValues = (data, type) => {

 let unique = data.map(item => item[type])
 if (type === "colors") {
  unique = unique.flat()
 }

return unique.reduce((acc, item) => {
  if (!acc.includes(item)) {
   acc.push(item)
  }
  return acc
 }, ["all"])
}