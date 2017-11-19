const myPlot = document.getElementById('myPlot');
/**
 * Layout
 */
const layout = {
  title: 'Bitcoin',
  width: 500,
  height: 500
}

const getData = () => axios.get('https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372')
  .then(res => {
    console.log(res)
  })
  .catch(err =>{

  });


// const date = response.data.map(data => {
//   return data.date;
// });
//
// const amount = response.data.map(data => {
//   return data.amount;
// });


// let apiData = getData()
//
// console.log('api data')
// console.log(apiData)
//
//
// let data = {
//   type: "scatter",
//   x: date,
//   y: +amount
// }
// Plotly.newPlot(myPlot, data, layout)


fetch('https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372').then(function(response) {
  return response.json();
}).then(function(data) {

  console.log(data)

});
