import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', bio: '' });

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(res => {
        setUser(res.data);
        setForm(res.data);
      });
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    const res = await axios.put(`http://localhost:5000/users/${id}`, form);
    setUser(res.data);
    alert('Profile updated!');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>User Profile</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" /><br />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" /><br />
      <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Bio" /><br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
