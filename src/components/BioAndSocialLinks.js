import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { FaEdit, FaSave, FaTimes, FaLink } from 'react-icons/fa';

const BioAndSocialLinks = ({ profileData, setProfileData, isEditing, setIsEditing }) => {
    const handleSaveChanges = () => {
        // Logic to save changes
        setIsEditing(false);
    };

    return (
        <Box sx={{ padding: 2 }}>
            {isEditing ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        multiline
                        rows={4}
                        fullWidth
                    />
                    <TextField
                        label="Twitter"
                        value={profileData.socialLinks.twitter}
                        onChange={(e) => setProfileData({
                            ...profileData,
                            socialLinks: { ...profileData.socialLinks, twitter: e.target.value }
                        })}
                        fullWidth
                    />
                    <TextField
                        label="LinkedIn"
                        value={profileData.socialLinks.linkedin}
                        onChange={(e) => setProfileData({
                            ...profileData,
                            socialLinks: { ...profileData.socialLinks, linkedin: e.target.value }
                        })}
                        fullWidth
                    />
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSaveChanges}
                            startIcon={<FaSave />}
                        >
                            Save Changes
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setIsEditing(false)}
                            startIcon={<FaTimes />}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box>
                    <Typography variant="body1" paragraph>
                        {profileData.bio}
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <FaLink /> Twitter: <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer">{profileData.socialLinks.twitter}</a>
                    </Typography>
                    <Typography variant="body2" paragraph>
                        <FaLink /> LinkedIn: <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">{profileData.socialLinks.linkedin}</a>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setIsEditing(true)}
                        startIcon={<FaEdit />}
                        sx={{ mt: 2 }}
                    >
                        Edit Profile
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default BioAndSocialLinks;
