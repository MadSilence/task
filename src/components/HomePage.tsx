import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import "./HomePage.css"


const HomePage = () => {
    const [value, setValue] = useState<string>('')
    const navigate = useNavigate();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const trimmedWord = value.trim().toLowerCase()
        if (!trimmedWord) {
            return;
        } else {
            navigate(`/${trimmedWord}`)
        }
    }

    const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const trimmedWord = value.trim().toLowerCase()
            if (!trimmedWord) {
                return;
            } else {
                navigate(`/${trimmedWord}`)
            }
        }
    }

    return (
        <div className='outer-wrapper'>
            <div className='inner-wrapper'>
                <h1>Simple Dictionary</h1>
                <p>Find definitions for word</p>
                <div className="search-wrapper">
                    <div className="search-field">
                        <input type="text"
                               placeholder="Search..."
                               value={value}
                               onChange={changeHandler}
                               onKeyDown={handleInput}
                        />
                    </div>
                    <div>
                        <button className="go-to-button" onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;