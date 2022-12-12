const NewsItem = (props) => {
    const { id, title } = props;

    return (
        <div className='newsItem' key={id}>
            <h2 className='newsItem__title'>{title}</h2>
        </div>
    );
};

export default NewsItem;