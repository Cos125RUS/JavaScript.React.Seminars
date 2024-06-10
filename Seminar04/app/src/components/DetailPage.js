import {useParams} from "react-router-dom";

const DetailPage = ({pages}) => {
    const {id} = useParams();
    const currentPage = pages.find((p) => p.id === parseInt(id, 10));
    return (
        <div>
            <h1>Page {id}</h1>
            <p>{currentPage.content}</p>
        </div>
    )
}

export default DetailPage;