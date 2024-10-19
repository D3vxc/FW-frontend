import React, { useEffect, useState } from 'react';
import './UserProfile.css'; // Optional: Add styles for the component
import { FaEdit } from 'react-icons/fa'; // Import edit icon

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch user data from /profile API
        const fetchUserData = async () => {
            try {
                const response = await fetch('/profile');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData(data); // Assuming the API returns an object with username and email
            } catch (error) {
                console.error(error);
                setMessage('Error fetching user data');
            }
        };

        fetchUserData();
    }, []);

    const handlePasswordUpdate = async (e) => {
        e.preventDefault();
        // Simulate password update logic
        if (newPassword.length < 6) {
            setMessage('Password must be at least 6 characters long.');
            return;
        }

        // Call your API to update the password
        try {
            const response = await fetch('/update-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password: newPassword }),
            });

            if (!response.ok) {
                throw new Error('Failed to update password');
            }

            setMessage('Password updated successfully!');
            setNewPassword(''); // Clear the password input
        } catch (error) {
            console.error(error);
            setMessage('Error updating password');
        }
    };

    if (!userData) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-info">
                <div className="info-row">
                    <strong>Username:</strong> {userData.username}
                    <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} />
                </div>
                <div className="info-row">
                    <strong>Email:</strong> {userData.email}
                    <FaEdit className="edit-icon" onClick={() => setIsEditing(true)} />
                </div>
            </div>
            {isEditing && (
                <form onSubmit={handlePasswordUpdate} className="password-update-form">
                    <h3>Update Password</h3>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Update Password</button>
                </form>
            )}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default UserProfile;
