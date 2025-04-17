const multer = require('multer');
const path = require('path');

function fakeBoundaryDetection() {
  return [
    { x: 50, y: 60, width: 100, height: 80 },
    { x: 200, y: 100, width: 120, height: 90 }
  ];
}


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage }).single('image');

exports.uploadImage = (req, res) => {
  upload(req, res, err => {
    if (err) return res.status(400).json({ error: 'Upload failed' });

    // Optional: Call OpenCV logic here
    const boundaries = fakeBoundaryDetection();

    res.json({
      message: 'Image uploaded',
      imagePath: `/uploads/${req.file.filename}`,
      boundaries
    });
  });
};
