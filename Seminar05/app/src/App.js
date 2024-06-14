import './App.css';
import Header from "./components/Header";
import MyProvider from "./components/MyProvider";
import Profile from "./components/Profile";
import StyleContainer from "./components/StyleContainer";
import LoadingFooter from "./components/LoadingFooter";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <MyProvider>
                <StyleContainer>
                    <Header/>
                    <Profile/>
                    <Counter/>
                    <LoadingFooter/>
                </StyleContainer>
            </MyProvider>
        </div>
    );
}

export default App;
