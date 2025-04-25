import './components.css';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="library-header">
        <h1>Welcome to The Library</h1>
        <p className="subtitle">A Nexus of Infinite Realities</p>
      </header>
      
      <section className="caretaker-introduction">
        <div className="caretaker-image">
          {/* Placeholder for an image of Ghannodahn */}
          <div className="placeholder-silhouette"></div>
        </div>
        <div className="caretaker-message">
          <p>
            <span className="greeting">Welcome, seeker of knowledge.</span> I am Ghannodahn, 
            caretaker of this vast repository—a catalog of All That Is, Was, and Shall Be 
            throughout the multiverse.  What wisdom do you seek among these infinite archives?
          </p>
        </div>
      </section>
      
      <section className="library-catalog">
        <div className="catalog-grid">
          <div className="catalog-item repositories">
            <h3>Code Repositories</h3>
            <p>Arcane scripts and constructs from across the digital realm</p>
            <a href="/repositories" className="catalog-link">Explore Repositories</a>
          </div>
          
          <div className="catalog-item demonstrations">
            <h3>Demonstrations</h3>
            <p>Witness the manifestation of concepts into tangible forms</p>
            <a href="/demos" className="catalog-link">View Demonstrations</a>
          </div>
          
          <div className="catalog-item ai-wisdom">
            <h3>AI Insights</h3>
            <p>Knowledge gleaned from the synthetic minds of this reality</p>
            <a href="/ai-content" className="catalog-link">Access AI Wisdom</a>
          </div>
          
          <div className="catalog-item training-scrolls">
            <h3>Training Scrolls</h3>
            <p>Ancient and modern techniques to expand one's capabilities</p>
            <a href="/training" className="catalog-link">Training Materials</a>
          </div>
        </div>
      </section>
      
      <div className="library-footer">
        <p className="caretaker-signature">
          "I illuminate paths, but the journey is yours to undertake." —Ghannodahn
        </p>
      </div>
    </div>
  );
}

export default Home;