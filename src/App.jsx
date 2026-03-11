import './CSS Files/App.css'
import Header from './components/header'
import Aside from "./components/aside";
import Main from './components/main';
import Toggle from './components/toggle';


function App() {
  return (
    <>
      <Aside />
      <Header />
      <Main />
      <Toggle />
    </>
  );
}
export default App