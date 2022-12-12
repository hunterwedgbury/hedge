import "./Add.scss";

import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { useState } from "react";

const Add = () => {

    const [updatedMessage, setUpdatedMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [title, setTitle] = useState('');
    const [stock, setStock] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [forecast, setForecast] = useState('');
    const [analysis, setAnalysis] = useState('');

    const navigateFeedPage = useNavigate();

    const handleAddPost = (event) => {
        event.preventDefault();

        const value1 = document.forms['myForm']['title'].value;
        if (value1 === '') {
            setErrorMessage('Title must be filled');
            return false;
        };
    
        const value2 = document.forms['myForm']['stock'].value;
        if (value2 === '') {
            setErrorMessage('Stock must be filled');
            return false;
        };
    
        const value3 = document.forms['myForm']['price'].value;
        if (value3 === '') {
            setErrorMessage('Price must be filled');
            return false;
        };
    
        const value4 = document.forms['myForm']['Analysis'].value;
        if (value4 === '') {
            setErrorMessage('Analysis must be filled');
            return false;
        };

        axios
        .post('http://localhost:1000/feed', {
            'title': title,
            'stock': stock,
            'current_price': currentPrice,
            'forecast': forecast,
            'analysis': analysis,
        })
        .then((res) => {
            console.log(res);
        })
        .then(setUpdatedMessage('Thank you for sharing your analysis on Hedge'))
        // .then(setTimeout(navigateFeedPage('/'), 3000))
        .catch((error) => {
            console.log(error);
        });
    };

    const handleCancelClick = (event) => {
        event.preventDefault();
        navigateFeedPage("/")
    };

    return (
        <form className='form' name='myForm' onSubmit={handleAddPost}>
            <h3 className="form__subheader">Title</h3>
            <input className="form__title" name='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
            
            <div className="form__container">
                <div>
                    <h3 className="form__subheader">Stock</h3>
                    <input className="form__input" name='stock' type="text" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock"></input>
                </div>
                <div>
                    <h3 className="form__subheader">Current Price</h3>
                    <input className="form__input" name='price' type="number" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} placeholder="Current Price"></input>
                </div>
                <div>
                    <h3 className="form__subheader">Forecast</h3>
                    <select className="form__forecast" type="text" value={forecast} onChange={(e) => setForecast(e.target.value)} placeholder="Forecast">
                        <option value='' disabled selected hidden></option>
                        <option value='BULLISH'>BULLISH</option>
                        <option value='BEARISH'>BEARISH</option>
                    </select>
                </div>
            </div>

            <h3 className="form__subheader">Analysis</h3>
            <textarea className="form__textarea" name='analysis' type="text" value={analysis} onChange={(e) => setAnalysis(e.target.value)} placeholder="Analysis"></textarea>

            <div className="buttons-container">
                <p className="buttons-container__message">{updatedMessage}{errorMessage}</p>
                <div className="buttons-container__container">
                    <button onClick={handleCancelClick} className="buttons-container__cancel">Cancel</button>
                    <button type='submit' className="buttons-container__add">Add New Post</button>
                </div>
            </div>
        </form>
    );
}

export default Add;