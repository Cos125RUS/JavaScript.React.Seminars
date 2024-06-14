import {withLoadingIndicator} from "../modules/withLoadingIndicator";
import Footer from "./Footer";
import {useState} from "react";

export default function LoadingFooter() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    const LoadingFooterComponent = withLoadingIndicator(Footer, loading);

    return <LoadingFooterComponent/>;
};