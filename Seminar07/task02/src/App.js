import './App.css';
import {Provider} from "react-redux";
import store from "./modules/store";
import User from "./component/User";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <User/>
      </Provider>
    </div>
  );
}

export default App;
