
import React, { useEffect, useRef, useState } from 'react';
import { Stage, Layer, Rect, Image as KonvaImage } from 'react-konva';

const CanvasEditor = ({ image, boundaries }) => {
  const [imgObj, setImgObj] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const loadImage = new window.Image();
    loadImage.src = image;
    loadImage.onload = () => setImgObj(loadImage);
  }, [image]);

  return (
    <div style={{ marginTop: '1rem' }}>
      <Stage width={800} height={600}>
        <Layer>
          {imgObj && <KonvaImage image={imgObj} ref={imageRef} />}
          {boundaries.map((box, i) => (
            <Rect
              key={i}
              x={box.x}
              y={box.y}
              width={box.width}
              height={box.height}
              stroke="red"
              draggable
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasEditor;
