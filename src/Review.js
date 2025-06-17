import React from 'react';
import './Review.css';
import sophia from './images/sophia.jpg';
import hyra from './images/hyra.jpg';
import Jimmy from './images/Jimmy.jpg';
import John from './images/John.jpg';
function Review() {
  const reviews = [
    { username: "Sophia", handle: "Sophia07", rating: "⭐⭐⭐⭐⭐", text: "Seriously cannot stop thinking about the Turkish Mac 'n Cheese!!!Loved it very much!",profilePic:sophia },
    { username: "John Luther", handle: "itz_luther", rating: "⭐⭐⭐⭐⭐", text: "We had such a great time celebrating my grandmother's birthday!",profilePic:John },
    { username: "Jimmy Cooper", handle: "jimmyhere", rating: "⭐⭐⭐⭐", text: "Such a cozy place,had a great time with my friends",profilePic:Jimmy},
    { username: "Hyra", handle: "Moons@04", rating: "⭐⭐⭐⭐⭐", text: "Best Feta Salad in town. Flawless every time!",profilePic:hyra},
  ];

  return (
    <section className="review-section"id="review">
      <h1>What do our customers think?</h1>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.profilePic} alt={review.username} className="profile-pic" />
            <div className="review-header">
              <span className="username">{review.username}</span>
              <span className="handle">{review.handle}</span>
              <span className="rating">{review.rating}</span>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Review;