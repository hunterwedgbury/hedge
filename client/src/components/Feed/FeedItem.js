import "./FeedItem.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import loading from '../../assets/loading.json'
// import { createChart } from 'lightweight-charts';

const FeedItem = ({title, name, date, stock, currentPrice, forecast, analysis}) => {

  console.log("name",name);
  let forecastClass = ""
  if(forecast === "BEARISH") {
      forecastClass = "post__element-forecast--red"
  } else {forecastClass = "post__element-forecast"};

  const apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED'
  const apiKey = 'apikey=YIBVHQEGWWYESD3O'
  const api = `${apiURL}&symbol=IBM&outputsize=full&${apiKey}`

  const [stockData, setStockData] = useState(null);

    // START OF CHART CODE

        // const stockChart = LightweightCharts.createChart(document.body, {
          
        //   width: 600,
        //   height: 300,
        //   layout: {
        //     backgroundColor: '#000000',
        //     textColor: 'rgba(255, 255, 255, 0.9)',
        //   },
        //   grid: {
        //     vertLines: {
        //       color: 'rgba(197, 203, 206, 0.5)',
        //     },
        //     horzLines: {
        //       color: 'rgba(197, 203, 206, 0.5)',
        //     },
        //   },
        //   rightPriceScale: {
        //     borderColor: 'rgba(197, 203, 206, 0.8)',
        //   },
        //   timeScale: {
        //     borderColor: 'rgba(197, 203, 206, 0.8)',
        //   },
        // });

        // var candleSeries = stockChart.addCandlestickSeries({
        //   upColor: 'rgba(255, 144, 0, 1)',
        //   downColor: '#000',
        //   borderDownColor: 'rgba(255, 144, 0, 1)',
        //   borderUpColor: 'rgba(255, 144, 0, 1)',
        //   wickDownColor: 'rgba(255, 144, 0, 1)',
        //   wickUpColor: 'rgba(255, 144, 0, 1)',
        // });

        // stockChart.timeScale().fitContent();

    // END OF CHART CODE

  useEffect(() => {
    axios
    .get(`${api}`)
    .then(({ data: stockDataArray }) => {
      const cleanDataSet = stockDataArray[ 'Time Series (Daily)' ];

        console.log(stockDataArray[ 'Time Series (Daily)' ]);
        console.log('cleanDataSet', cleanDataSet);

      setStockData(stockDataArray);
      // candleSeries.setData(cleanDataSet);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  if (stockData === null) {
    return <h1>Loading...</h1>
  }

  function dateFunction(date) {

    let postDate = date.slice(0, 10);

    return postDate;
  }

  return (
    <div className="post">
      <p className="post__title">{title}</p>
      <div className="container1">
        <p className="post__element-name">{name}</p>
        <p className="post__element-date">{dateFunction(date)}</p>
      </div>
      <div className="container2">
        <div className="container3">
          <p className="post__element-label">Stock:</p>
          <p className="post__element-text">{stock}</p>
        </div>
        <div className="container3">
          <p className="post__element-label">Price:</p>
          <p className="post__element-text">{currentPrice}</p>
        </div>
        <div className="container3">
          <p className="post__element-label">Forecast:</p>
          <p className={forecastClass}>{forecast}</p>
        </div>
      </div>
      {/* <div className="stockChart">{stockChart}</div> */}
      <p className="post__element-text">{analysis}</p>
    </div>
  );
}

export default FeedItem;