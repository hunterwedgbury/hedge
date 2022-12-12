import './Watchlist.scss';

const Watchlist = () => {

    return (
        <div className='watchlist'>
            <h2 className='watchlist__header'>WATCHLIST</h2>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Alphabet</p>
                    <p className='watchlist__change--red'>-2.16%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>GOOG</p>
                    <p className='watchlist__price'>95.15</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Microsoft</p>
                    <p className='watchlist__change--red'>-0.31%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>MSFT</p>
                    <p className='watchlist__price'>244.37</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Shopify</p>
                    <p className='watchlist__change--red'>-1.23%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>SHOP</p>
                    <p className='watchlist__price'>38.49</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Etsy</p>
                    <p className='watchlist__change--red'>-3.61%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>ETSY</p>
                    <p className='watchlist__price'>130.13</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Adobe</p>
                    <p className='watchlist__change--red'>-1.35%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>ADBE</p>
                    <p className='watchlist__price'>326.68</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>PayPal</p>
                    <p className='watchlist__change'>3.03%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>PYPL</p>
                    <p className='watchlist__price'>74.42</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Block</p>
                    <p className='watchlist__change--red'>-0.38%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>SQ</p>
                    <p className='watchlist__price'>61.07</p>
                </div>
            </div>

            <div className='watchlist__item'>
                <div className='watchlist__details'>
                    <p className='watchlist__stock'>Visa</p>
                    <p className='watchlist__change--red'>-0.61%</p>
                </div>
                <div className='watchlist__details'>
                    <p className='watchlist__ticker'>V</p>
                    <p className='watchlist__price'>207.81</p>
                </div>
            </div>
            
        </div>
    );
};

export default Watchlist;