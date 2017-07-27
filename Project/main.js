// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
let total = 0
for (var i = 0; i < data.length; i++) {
  total += data[i].price;
  }
  let length = data.length
  let avg = total / length
  console.log('avg: ', avg);
  return avg;
  // Answer:
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let newArray = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      newArray.push(data[i].title)
    }
  }
console.log('items between 14 & 18')
  console.log(newArray)
  return newArray
//   // Answer:
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let namePrice= ''
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      namePrice += (data[i].title + ' cost ' + data[i].price + ' pounds')
    }
    console.log(namePrice);
  }
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let woodArray=[]
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.includes('wood')) {
      woodArray.push(data[i].title + " is made of wood")
    }
  }
  console.log(woodArray);
  // Answer:
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
data.forEach(function(madeof) {
  if (madeof.materials.length >= 8) {
    console.log(madeof.title + madeof.materials.length + madeof.materials);
  }

})
  // Answer:
}


// 6: How many items were made by their sellers?
// Answer:

// forEach
function question6 () {
  let madeByMe = 0;
    data.forEach( function (item) {
      if (item.who_made === 'i_did') {
        madeByMe++;
      }
    });
    console.log(madeByMe + ' items were made by their sellers.');
}

// for loop
function question6 () {
  let madeBy=0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === 'i_did') {
      madeBy++;
    }
  }
  // console.log(madeBy );
  console.log(madeBy+ ' items were made by their seller.')
  // Answer:
}
