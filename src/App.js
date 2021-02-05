import './App.css';
import Todo from './components/todos/Todo'
import Header from './components/common/Header'
import './components/common/CommonStyle.css'

function App() {
  return (
    <div className="App" style={{background:'#fafafa'}}>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
