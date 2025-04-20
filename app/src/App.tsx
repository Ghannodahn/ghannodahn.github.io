import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Home />
      </div>
    </div>
  )
}

export default App