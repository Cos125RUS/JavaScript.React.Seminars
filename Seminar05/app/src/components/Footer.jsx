import {useEffect, useState} from "react";

const Footer = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date());
        }, 1000);
    }, [time]);

    return (
        <footer>
            <h3>{time.toLocaleString()}</h3>
        </footer>
    );
}

export default Footer;