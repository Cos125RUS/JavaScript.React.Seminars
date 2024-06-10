import {Link} from "react-router-dom";

const ListPage = ({pages}) => {
    return (
        <ul>
            {pages.map(page => (
                <li key={page.id}>
                    <Link to={`/detail/${page.id}`}>{page.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default ListPage;