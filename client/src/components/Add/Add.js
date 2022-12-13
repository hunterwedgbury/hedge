import "./Add.scss";

import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { useState, useEffect } from "react";

const Add = () => {

    const initialValues = { title: '', stock: '', currentPrice: '', forecast: '', analysis: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [updatedMessage, setUpdatedMessage] = useState('');

    const navigateFeedPage = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleAdd = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));

        axios
        .get(`http://localhost:1000/auth/profile`, { withCredentials: true })
        .then(res => {
            console.log('PROFILE', res.data);
        })
        .post('http://localhost:1000/feed', {
            'title': formValues.title,
            'stock': formValues.stock,
            // 'name': res.data.displayName,
            'current_price': formValues.currentPrice,
            'forecast': formValues.forecast,
            'analysis': formValues.analysis,
        })
        .then((res) => {
            console.log(res);
        })
        // .then(setUpdatedMessage('Thank you for sharing your analysis on Hedge'))
        // .then(setTimeout(()=>navigateFeedPage('/'), 2000))
        .catch((error) => {
            console.log(error);
        });
    };

    const handleCancel = (event) => {
        event.preventDefault();
        navigateFeedPage("/")
    };

    const validate = (formValues) => {
        const formErrors = {}
        if (!formValues.title) {
            formErrors.title = "Please provide title";
        }
        if (!formValues.stock) {
            formErrors.stock = "Please provide feature stock";
        }
        if (!formValues.currentPrice) {
            formErrors.currentPrice = "Please provide stock price";
        }
        if (!formValues.forecast) {
            formErrors.forecast = "Please provide forecast";
        }
        if (!formValues.analysis) {
            formErrors.analysis = "Please provide analysis";
        } 
        return formErrors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0) {
            console.log(formValues);
        }}, [formErrors]);

    return (
        <form className='form' onSubmit={handleAdd}>
            <div className="input-container">
                <h3 className="form__subheader">Title</h3>
                <input className="form__title" name='title' type="text" value={formValues.title} onChange={handleChange} placeholder="Title"></input>
                <p className="input-container__error">{formErrors.title}</p>
            </div>

            <div className="form__container">
                <div className="input-container">
                    <h3 className="form__subheader">Stock</h3>
                    <input className="form__input" name='stock' type="text" value={formValues.stock} onChange={handleChange} placeholder="Stock"></input>
                    <p className="input-container__error">{formErrors.stock}</p>
                </div>
                <div className="input-container">
                    <h3 className="form__subheader">Current Price</h3>
                    <input className="form__input" name='currentPrice' type="number" value={formValues.currentPrice} onChange={handleChange} placeholder="Current Price"></input>
                    <p className="input-container__error">{formErrors.currentPrice}</p>
                </div>
                <div className="input-container">
                    <h3 className="form__subheader">Forecast</h3>
                    <select className="form__forecast" name='forecast' type="text" value={formValues.forecast} onChange={handleChange} placeholder="Forecast">
                        <option value='' disabled selected hidden></option>
                        <option value='BULLISH'>BULLISH</option>
                        <option value='BEARISH'>BEARISH</option>
                    </select>
                    <p className="input-container__error">{formErrors.forecast}</p>
                </div>
            </div>

            <div className="input-container">
                <h3 className="form__subheader">Analysis</h3>
                <textarea className="form__textarea" name='analysis' type="text" value={formValues.analysis} onChange={handleChange} placeholder="Analysis"></textarea>
                <p className="input-container__error">{formErrors.analysis}</p>
            </div>

            <div className="buttons-container">
                <p className="buttons-container__message">{updatedMessage}</p>
                <div className="buttons-container__container">
                    <button onClick={handleCancel} className="buttons-container__cancel">Cancel</button>
                    <button type='submit' className="buttons-container__add">Add New Post</button>
                </div>
            </div>
        </form>
    );
}

export default Add;