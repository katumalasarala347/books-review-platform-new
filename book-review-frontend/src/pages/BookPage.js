import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({ user: '', rating: '', comment: '' });

  const API = 'https://books-review-platform-new.onrender.com';

  useEffect(() => {
    axios.get(`${API}/books/${id}`)
      .then(res => setBook(res.data));

    axios.get(`${API}/reviews?bookId=${id}`)
      .then(res => setReviews(res.data));
  }, [id]);

  const submitReview = async (e) => {
    e.preventDefault();
    await axios.post(`${API}/reviews`, { ...review, bookId: id });
    setReview({ user: '', rating: '', comment: '' });
    const res = await axios.get(`${API}/reviews?bookId=${id}`);
    setReviews(res.data);
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>

      <h2>Reviews</h2>
      {reviews.map(r => (
        <div key={r._id}>
          <strong>{r.user}</strong> rated {r.rating}/5
          <p>{r.comment}</p>
        </div>
      ))}

      <h3>Add Review</h3>
      <form onSubmit={submitReview}>
        <input
          placeholder="Your name"
          value={review.user}
          onChange={e => setReview({ ...review, user: e.target.value })}
        /><br/>
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={review.rating}
          onChange={e => setReview({ ...review, rating: e.target.value })}
        /><br/>
        <textarea
          placeholder="Comment"
          value={review.comment}
          onChange={e => setReview({ ...review, comment: e.target.value })}
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
