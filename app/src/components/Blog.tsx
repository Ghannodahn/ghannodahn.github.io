import './components.css';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-container">
      <h1>The Library Archives</h1>
      <p className="blog-intro">
        Collected thoughts, discoveries, and observations from across the multiverse.
      </p>
      
      <div className="blog-entries">
        <article className="blog-entry">
          <h2>The Nature of Recursive Knowledge</h2>
          <div className="blog-meta">Posted on Stardate 2023.10.15</div>
          <p>
            Knowledge that builds upon itself creates patterns that echo throughout
            different disciplines. I've observed similar structures in programming paradigms,
            mystical traditions, and quantum information theory.
          </p>
          <a href="#" className="read-more">Continue reading...</a>
        </article>
        
        <article className="blog-entry">
          <h2>Interfaces Between Realities</h2>
          <div className="blog-meta">Posted on Stardate 2023.09.28</div>
          <p>
            The boundaries between different realities are more permeable than most realize.
            Digital constructs, in particular, serve as excellent conduits for cross-dimensional
            information transfer.
          </p>
          <a href="#" className="read-more">Continue reading...</a>
        </article>
        
        <article className="blog-entry">
          <h2>On the Preservation of Digital Artifacts</h2>
          <div className="blog-meta">Posted on Stardate 2023.08.17</div>
          <p>
            The ephemeral nature of digital creations presents unique challenges for archivists.
            Unlike physical media, digital information requires active maintenance to prevent decay.
          </p>
          <a href="#" className="read-more">Continue reading...</a>
        </article>
      </div>
    </div>
  );
}

export default Blog;