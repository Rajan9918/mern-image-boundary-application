
import React, { useState } from 'react';
import axios from 'axios';
import CanvasEditor from '../components/CanvasEditor';

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [boundaries, setBoundaries] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert('Please select an image first!');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/image/upload', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBoundaries(res.data.boundaries || []);
      alert('Uploaded Successfully...');
    } catch (err) {
      console.error('Upload error', err);
      alert('Upload failed. Check console for details.');
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Dashboard</h2>

        <div className="mb-3">
          <label htmlFor="imageUpload" className="form-label">Upload an Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            id="imageUpload"
            onChange={handleFileChange}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-success" onClick={handleUpload}>Upload</button>
        </div>

        {image && (
          <>
            <div className="text-center my-4">
              <img
                src={image}
                alt="preview"
                className="img-fluid rounded"
                style={{ maxHeight: '300px' }}
              />
            </div>
            <CanvasEditor image={image} boundaries={boundaries} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
