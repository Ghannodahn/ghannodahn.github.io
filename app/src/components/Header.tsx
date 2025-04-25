import './Header.css';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

function Header({ onNavigate, currentPage }: HeaderProps) {
  // Handle click and prevent default behavior
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate(page);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
            <h1>The Library of The Infinity Citadel</h1>
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a 
                href="/" 
                onClick={(e) => handleNavClick(e, 'home')}
                className={currentPage === 'home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className={currentPage === 'about' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/blog" 
                onClick={(e) => handleNavClick(e, 'blog')}
                className={currentPage === 'blog' ? 'active' : ''}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={currentPage === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;