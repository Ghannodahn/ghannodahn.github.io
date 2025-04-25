import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Function to handle navigation
  const navigate = (page: string) => {
    setCurrentPage(page)
  }

  // Render the appropriate component based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div className="home-page"><Home /></div>
      case 'about':
        return <About />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />
      default:
        return <div className="home-page"><Home /></div>
    }
  }

  return (
    <div className="app">
      <Header onNavigate={navigate} currentPage={currentPage} />
      <div className="app-body">
        <div className="page-container">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

export default App