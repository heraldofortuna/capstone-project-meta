import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setIsSubmitted(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="booking-container">
      {showSuccess && (
        <div className="success-toast">
          <span>Reservation Successfully Submitted!</span>
          <button onClick={() => setShowSuccess(false)} className="close-toast">×</button>
        </div>
      )}

      <h1>Reserve a Table</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Choose Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            <option value="17:00">5:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit">Make Your Reservation</button>
      </form>

      {isSubmitted && (
        <div className="confirmation-box">
          <h2>Your Reservation</h2>
          <hr />
<p>
  <strong>Name:</strong>{' '}
  <em style={{ color: '#EE9972' }}>
    {formData.firstName} {formData.lastName}
  </em>
</p>
<p>
  <strong>Date:</strong>{' '}
  <span style={{ color: '#EE9972' }}>{formData.date}</span>
</p>
<p>
  <strong>Time:</strong>{' '}
  <span style={{ color: '#EE9972' }}>{formData.time}</span>
</p>
<p>
  <strong>Guests Count:</strong>{' '}
  <span style={{ color: '#EE9972' }}>{formData.guests}</span>
</p>
<p>
  <strong>Occasion:</strong>{' '}
  <em style={{ color: '#EE9972' }}>
    {formData.occasion || 'None'}
  </em>
</p>
        </div>
      )}
    </div>
  );
}

export default Booking;
