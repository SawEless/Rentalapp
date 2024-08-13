import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { FaCamera } from 'react-icons/fa';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ProfilePictureUpload = () => {
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 });

    return (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            {src && (
                <ReactCrop
                    src={src}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setSrc(URL.createObjectURL(e.target.files[0]))}
                style={{ display: 'none' }}
                id="upload-button"
            />
            <label htmlFor="upload-button">
                <IconButton component="span" color="primary" sx={{ mt: 2 }}>
                    <FaCamera />
                </IconButton>
            </label>
        </Box>
    );
};

export default ProfilePictureUpload;
