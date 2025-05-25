import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import UserProfile from './pages/UserProfile';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <div className="container">
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/">🏠 Home</Link> |{" "}
          <Link to="/add-book">➕ Add Book</Link> |{" "}
          <Link to="/users/6832f114b91a9df737a65693">👤 Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; // ✅ required!
