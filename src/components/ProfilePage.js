import React, { useState } from 'react';
import './ProfilePage.css';
import { Button, TextField, Avatar, Typography, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { PhotoCamera } from '@mui/icons-material';

const ProfilePage = () => {
    const [profilePic, setProfilePic] = useState('default-profile.jpg');
    const [userName, setUserName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [address, setAddress] = useState('123 Main St, Anytown, USA');
    const [bio, setBio] = useState('Lorem ipsum dolor sit amet.');
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfilePic(event.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleUpdateProfile = () => {
        // Handle profile update logic here
        alert('Profile updated!');
    };

    const handleChangePassword = () => {
        if (newPassword === confirmPassword) {
            // Handle password change logic here
            alert('Password changed successfully!');
        } else {
            alert('Passwords do not match.');
        }
    };

    const handleDeleteAccount = () => {
        // Handle account deletion logic here
        alert('Account deleted!');
    };

    return (
        <div className="profile-page">
            <div className="profile-header">
                <motion.h1 
                    className="profile-title" 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    Profile
                </motion.h1>
                <div className="profile-pic-container">
                    <Avatar 
                        src={profilePic} 
                        alt="Profile Picture" 
                        sx={{ width: 120, height: 120 }}
                        className="profile-pic"
                    />
                    <input 
                        type="file" 
                        id="profilePicInput" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="profilePicInput">
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            component={motion.div}
                            whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
                            whileTap={{ scale: 0.9 }}
                            startIcon={<PhotoCamera />}
                        >
                            Change Photo
                        </Button>
                    </label>
                </div>
            </div>
            <div className="profile-info">
                <TextField 
                    label="Name" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                />
                <TextField 
                    label="Email" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    label="Phone Number" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
                <TextField 
                    label="Address" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                />
                <TextField 
                    label="Bio" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    multiline
                    rows={4} 
                    value={bio} 
                    onChange={(e) => setBio(e.target.value)} 
                />
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6">Change Password</Typography>
                <TextField 
                    label="New Password" 
                    type="password" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                />
                <TextField 
                    label="Confirm Password" 
                    type="password" 
                    variant="outlined" 
                    margin="normal" 
                    fullWidth 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleChangePassword} 
                    component={motion.div}
                    whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    Change Password
                </Button>
                <Divider sx={{ marginY: 2 }} />
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleDeleteAccount} 
                    component={motion.div}
                    whileHover={{ scale: 1.1, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    Delete Account
                </Button>
            </div>
        </div>
    );
};

export default ProfilePage;
