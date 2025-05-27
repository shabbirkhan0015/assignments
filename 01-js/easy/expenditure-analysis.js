/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// const transactions = [
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656076801000,
//     price: 5,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656076802000,
//     price: 15,
//     category: "Clothing",
//     itemName: "Shirt",
//   },
// ];
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] += transaction.price;
    } else {
      categoryTotals[transaction.category] = transaction.price;
    }
  }

  const result = [];

  for (const category in categoryTotals) {
    result.push({
      category,
      totalSpent: categoryTotals[category],
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
