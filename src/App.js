import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <SignIn />
      </Container>
    </div>
  );
}

export default App;
