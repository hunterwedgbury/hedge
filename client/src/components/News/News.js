import './News.scss';
import NewsItem from './NewsItem.js';

function News({ news }) {

    return (
        <div className='news'>
            <h2 className='news__header'>DAILY HEADLINES</h2>
                {news.map((article) => {
                    return (
                        <a href={`${article.url}`}>
                            <NewsItem                        
                                key={article.id}
                                id={article.id}
                                title={article.title}
                            />
                        </a>
            )})}
        </div>
    );
};

export default News;