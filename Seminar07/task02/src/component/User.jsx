import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const User = () => {
    const [id, setId] = useState(1);
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const loadUserData = () => {
        dispatch({type: 'FETCH_USER_REQUESTED', payload: {id: id}});
    };

    return (
        <div>
            <p>{userData.name}</p>
            <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={loadUserData}>load user data</button>
        </div>
    );
};

export default User;