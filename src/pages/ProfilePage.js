import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <div className="profile-info">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg" // Заглушка для аватара
          alt="User Avatar"
          className="profile-avatar"
        />
        <h3>John Doe</h3>
        <p>Email: john.doe@example.com</p>
        <p>Member since: January 2025</p>
        <button className="profile-button">Edit Profile</button>
        <button className="profile-button logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default ProfilePage;