import { useState } from 'react';
import axios from 'axios';

export default function AddBook() {
  const [book, setBook] = useState({
    title: '', author: '', description: '', coverImage: '', rating: ''
  });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/books', book);
    alert('Book added!');
    setBook({ title: '', author: '', description: '', coverImage: '', rating: '' });
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required /><br />
        <input name="author" value={book.author} onChange={handleChange} placeholder="Author" required /><br />
        <input name="coverImage" value={book.coverImage} onChange={handleChange} placeholder="Image URL" /><br />
        <input name="rating" type="number" value={book.rating} onChange={handleChange} placeholder="Rating" /><br />
        <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
