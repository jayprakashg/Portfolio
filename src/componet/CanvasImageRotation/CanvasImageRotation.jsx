import React, { useEffect, useRef, useState } from 'react';

const CanvasImageRotation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lastImageIndex, setLastImageIndex] = useState(-1);

  // Load images
  useEffect(() => {
    const imageArray = [];
    let loadedImages = 0;
    for (let i = 1; i < 59; i++) {
      const img = new Image();
      img.src = `public/img/canimg/img${i}.jpg`;
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 58) {
          console.log('All images loaded!');
          setImages(imageArray);
        }
      };
      imageArray.push(img);
    }
  }, []);

  // Handle mousemove and draw image
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const candivElement = canvas.parentElement;

    const drawImage = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[currentImageIndex];
      if (img) {
        const x = (canvas.width - 400) / 2;
        const y = (canvas.height - 400) / 2;
        ctx.drawImage(img, x, y, 400, 400);
      }
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const angle = Math.atan2(event.clientY - rect.top - centerY, event.clientX - rect.left - centerX) + Math.PI;
      const newImageIndex = Math.floor((angle / (2 * Math.PI)) * images.length) % images.length;

      if (newImageIndex !== lastImageIndex) {
        setCurrentImageIndex(newImageIndex);
        setLastImageIndex(newImageIndex);
      }
    };

    // Adjust canvas size on window resize
    const handleResize = () => {
      canvas.width = candivElement.offsetWidth;
      canvas.height = candivElement.offsetHeight;
      drawImage();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initial setup
    canvas.width = candivElement.offsetWidth;
    canvas.height = candivElement.offsetHeight;
    drawImage();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [images, currentImageIndex, lastImageIndex]);

  return (
    <div className="candiv backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-full overflow-hidden flex items-center justify-center w-96 h-96">
        <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default CanvasImageRotation;
