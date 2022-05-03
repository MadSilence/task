import leftArrow from "../left-arrow.png"
import playButton from "../play-button-arrowhead.png"
import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {useNavigate} from 'react-router-dom';
import "./ResultPage.css"


const ResultPage: React.FC = () => {
    const {json, loading, error} = useTypedSelector(state => state.json)
    const {fetchJson} = useActions()
    const word = document.location.pathname
    const navigate = useNavigate();


    useEffect(() => {
        fetchJson(word)
    }, [])

    if (loading) {
        return <div className="lds-dual-ring"></div>
    }
    if (error) {
        return (<div className="word-not-found">
                <h1>{error}</h1>
                <h2>Could not find definition for:{word}</h2>
                <button className="return-button" onClick={() => navigate(`/`)}>
                    Return to the home page
                </button>
            </div>
        )
    }

    const goBack = () => {
        navigate(`/`)
    }

    async function playAudio(word: string) {
        const audio = new Audio(word)

        try {
            await audio.play();
        } catch (err) {
            alert('We dont have pronunciation for this word((');
        }
    }


    return (
        <div className="page-wrapper">
            <div>
                <button className="go-back-button" onClick={goBack}>
                    <img
                        src={leftArrow}
                        className="icon"
                        alt="Go back"
                    />
                </button>
            </div>
            <div>
                {json.map(field =>
                    <div key={field.url}>
                        <div className="single-wrap">
                            <div className="main-word-wrapper">
                                <div className="main-word-inner-wrapper">
                                    <h1>{field.word}</h1>
                                    <div>{field.phonetics.map(phonetic => {
                                        return (
                                            <div className='trans-audio' key={phonetic.sourceUrl}>
                                                <p>
                                                    {phonetic.text}
                                                </p>
                                                <button className="play-button"
                                                        onClick={() => playAudio(phonetic.audio)}
                                                >
                                                    <img src={playButton} className="icon"
                                                         alt="Play word"/>
                                                </button>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>

                            <div className="list">
                                <h1>Meanings:</h1>
                                {field.meanings.map(meaning => {
                                    return (
                                        <div key={meaning.partOfSpeech}>
                                            {meaning.definitions.map(definition => {
                                                return (
                                                    <li key={definition.definition}>
                                                        {definition.definition}
                                                    </li>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                                <div className="synonyms-antonyms">
                                    <div>
                                        <h1>Synonyms:</h1>
                                        {field.meanings.map(meaning => {
                                            return (
                                                <div key={meaning.partOfSpeech}>
                                                    {meaning.synonyms.map(synonym => {
                                                        return (
                                                            <li key={synonym}>
                                                                {synonym}
                                                            </li>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        <h1>Antonyms:</h1>
                                        {field.meanings.map(meaning => {
                                            return (
                                                <div key={meaning.partOfSpeech}>
                                                    {meaning.antonyms.map(antonym => {
                                                        return (
                                                            <li key={antonym}>
                                                                {antonym}
                                                            </li>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
};

export default ResultPage;