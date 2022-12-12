import "./FeedItem.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';

const FeedItem = ({title, firstName, lastName, date, stock, currentPrice, forecast, analysis}) => {

  let forecastClass = ""
  if(forecast === "BEARISH") {
      forecastClass = "post__element-forecast--red"
  } else {forecastClass = "post__element-forecast"};

  const apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED'
  const apiKey = 'apikey=YIBVHQEGWWYESD3O'
  const api = `${apiURL}&symbol=IBM&outputsize=full&${apiKey}`

  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    axios
    .get(`${api}`)
    .then(({ data: stockDataArray }) => {
      console.log(stockDataArray)
      // const slicedArray = newsArray.articles.slice(0, 5);
      // setNews(slicedArray);
      setStockData(stockDataArray);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  if (stockData === null) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="post">
      <p className="post__title">{title}</p>
      <div className="container1">
        <p className="post__element-name">{firstName} {lastName}</p>
        <p className="post__element-date">{date}</p>
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
      <p className="post__element-text">{analysis}</p>
    </div>
  );
}

export default FeedItem;