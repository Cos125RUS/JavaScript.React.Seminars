import {useState} from "react";
import axios from "axios";

const API_KEY = '76daa95a9261c3250867e0c4';
const URI = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;
const Exchanger = () => {
    const [exchangeFrom, setExchangeFrom] = useState('RUB');
    const [exchangeTo, setExchangeTo] = useState('USD');
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const fromRateUrl = `${URI}/${exchangeFrom}`;
        axios.get(fromRateUrl).then(response => {
            const rate = response.data.conversion_rates[exchangeTo];
            setResult((rate * count).toFixed(2));
        })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
            <input type="text" value={exchangeFrom} onChange={(e) => setExchangeFrom(e.target.value)}/>
            <input type="text" value={exchangeTo} onChange={(e) => setExchangeTo(e.target.value)}/>
            <button onClick={exchange}>Exchange</button>
            <p>{count} {exchangeFrom} = {result} {exchangeTo}</p>
        </div>
    );
};

export default Exchanger;