'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const sliderItems = [
  { name: 'Booster', image: '/productPhotos/booster.png' },
  { name: 'Champion Plus', image: '/productPhotos/championPlus.png' },
  { name: 'Champion', image: '/productPhotos/champion.png' },
  { name: 'Defender', image: '/productPhotos/defender.png' },
  { name: 'Fighter', image: '/productPhotos/fighter.png' },
  { name: 'Marshal', image: '/productPhotos/marshal.png' },
  { name: 'Power Plus', image: '/productPhotos/powerPlus.png' },
  { name: 'Sniper', image: '/productPhotos/sniper.png' },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const totalSlides = sliderItems.length;
  const slideWidth = 100 / slidesToShow;
  const maxIndex = totalSlides - 1;
  const cloneCount = slidesToShow;
  const extendedSlides = [
    ...sliderItems.slice(-cloneCount),
    ...sliderItems,
    ...sliderItems.slice(0, cloneCount),
  ];
  const displayIndex = currentIndex + cloneCount;

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesToShow(4);
      else if (width >= 900) setSlidesToShow(3);
      else if (width >= 640) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  useEffect(() => {
    if (currentIndex < 0 || currentIndex > maxIndex) {
      const wrapTo = currentIndex < 0 ? maxIndex : 0;
      const timer = window.setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(wrapTo);
      }, 300);
      return () => window.clearTimeout(timer);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((current) => current >= maxIndex ? 0 : current + 1);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [maxIndex]);

  const handlePointerDown = (event) => {
    dragStartX.current = event.clientX;
    setIsDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    const threshold = 60;
    if (dragOffset > threshold) {
      setCurrentIndex((current) => current <= 0 ? maxIndex : current - 1);
    } else if (dragOffset < -threshold) {
      setCurrentIndex((current) => current >= maxIndex ? 0 : current + 1);
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const transformValue = `translateX(calc(-${displayIndex * slideWidth}% + ${dragOffset}px))`;

  const trackStyle = {
    transform: transformValue,
    transition: transitionEnabled ? 'transform 0.4s ease' : 'none',
  };

  return (
    <div className="prod-slider scroll-animate">
      <div
        className={`prod-slider-window ${isDragging ? 'dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="prod-slider-track" style={trackStyle}>
          {extendedSlides.map((item, index) => (
            <div key={`${item.name}-${index}`} className="prod-slide" style={{ width: `${slideWidth}%` }}>
              <div className="prod-slide-card">
                <div className="prod-slide-image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="prod-slide-image"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
                <div className="prod-slide-info">
                  <h3 className="prod-slide-name">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
