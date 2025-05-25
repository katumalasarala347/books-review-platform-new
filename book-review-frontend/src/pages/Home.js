import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const API = 'https://books-review-platform-new.onrender.com';
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get(`${API}/books`)
      .then(res => {
        setBooks(res.data);
        setAllBooks(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setBooks(allBooks.filter(book => book.title.toLowerCase().includes(query)));
  };

  return (
    <div className="container">
      <h1>Featured Books</h1>
      <input
        type="text"
        placeholder="Search books by title..."
        onChange={handleSearch}
        style={{ padding: '10px', marginBottom: '20px', width: '100%' }}
      />
      {books.length === 0 ? <p>Loading books...</p> : (
        <div>
          {books.map(book => (
            <div key={book._id} className="book-card">
              <img src={book.coverImage} alt={book.title} />
              <div>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>Rating: {book.rating ?? 'N/A'}</p>
                <Link to={`/books/${book._id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
