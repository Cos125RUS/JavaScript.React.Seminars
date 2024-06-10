import './App.css';
import Box from "./components/Box";
import List from "./components/List";
import getItems from "./modules/getItems";
import renderItem from "./modules/renderItem";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListPage from "./components/ListPage";
import DetailPage from "./components/DetailPage";

const pages = [
    {
        id: 1,
        title: "Page 1",
        content: "Page 1 content",
    },
    {
        id: 2,
        title: "Page 2",
        content: "Page 2 content",
    }
];

function App() {
    return (
        <Router>
            <div className="App">
                {/*<Box>*/}
                {/*    <h1>Title</h1>*/}
                {/*</Box>*/}
                {/*<Box>*/}
                {/*    <p>Some text</p>*/}
                {/*</Box>*/}
                {/*<List items={getItems} renderItem={renderItem} />*/}
                <Routes>
                    <Route path="/" element={<ListPage pages={pages}/>}/>
                    <Route path="/detail/:id" element={<DetailPage pages={pages}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
