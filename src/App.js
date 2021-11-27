import "./App.css";
import Header from "./components/Header";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
//import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<SignIn />*/}

      <SignUp />
    </div>
  );
}

export default App;
