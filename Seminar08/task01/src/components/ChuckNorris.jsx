import axios from "axios";
import {useState} from "react";

const URL = 'https://api.chucknorris.io/jokes/random';

const ChuckNorris = () => {
    const [joke, setJoke] = useState('');

    const loadJoke = () => {
        axios.get(URL)
            .then(response => {
            console.log(response.data)
            setJoke(response.data.value);
        });
    };

    return (
        <div>
            <button onClick={loadJoke}>New Joke</button>
            {joke && <p>{joke}</p>}
        </div>
    );
};

export default ChuckNorris;