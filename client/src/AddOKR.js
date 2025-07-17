import React, { useState } from 'react';
import axios from 'axios';

const AddOKR = () => {
  const [formData, setFormData] = useState({
    objective: '',
    keyResults: '',
    team: '',
    progress: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'progress' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      keyResults: formData.keyResults.split(',').map(k => k.trim())
    };

    try {
      await axios.post('http://localhost:5000/api/okrs', payload);
      alert('✅ OKR Added!');
      setFormData({ objective: '', keyResults: '', team: '', progress: 0 });
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New OKR</h2>
      <input name="objective" placeholder="Objective" value={formData.objective} onChange={handleChange} required /><br />
      <input name="keyResults" placeholder="Key Results (comma-separated)" value={formData.keyResults} onChange={handleChange} required /><br />
      <input name="team" placeholder="Team" value={formData.team} onChange={handleChange} required /><br />
      <input name="progress" type="number" placeholder="Progress (%)" value={formData.progress} onChange={handleChange} /><br />
      <button type="submit">Create OKR</button>
    </form>
  );
};

export default AddOKR;
