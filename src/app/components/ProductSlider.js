'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { products } from '../data/siteContent';

const sliderItems = products.map((item) => ({
  name: item.name,
  technicalName: item.composition || item.category,
  image: item.image,
}));

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef(0);

  const totalSlides = sliderItems.length;
  const slideWidth = 100 / slidesToShow;
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

  const handleNext = useCallback(() => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev + 1);
  }, [transitionEnabled]);

  const handlePrev = useCallback(() => {
    if (!transitionEnabled) return;
    setCurrentIndex((prev) => prev - 1);
  }, [transitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentIndex >= totalSlides) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - totalSlides);
    } else if (currentIndex < 0) {
      setTransitionEnabled(false);
      setCurrentIndex(currentIndex + totalSlides);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [transitionEnabled]);

  useEffect(() => {
    if (isDragging || isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [handleNext, isDragging, isHovered]);

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
    const threshold = 50;
    if (dragOffset > threshold) {
      handlePrev();
    } else if (dragOffset < -threshold) {
      handleNext();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const transformValue = `translateX(calc(-${displayIndex * slideWidth}% + ${dragOffset}px))`;

  const trackStyle = {
    transform: transformValue,
    transition: transitionEnabled ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
  };

  const activeDotIndex = ((currentIndex % totalSlides) + totalSlides) % totalSlides;

  return (
    <div
      className="prod-slider scroll-animate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className="prod-slider-arrow prod-slider-arrow-left"
        onClick={handlePrev}
        aria-label="Previous Product"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        className="prod-slider-arrow prod-slider-arrow-right"
        onClick={handleNext}
        aria-label="Next Product"
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <div
        className={`prod-slider-window ${isDragging ? 'dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="prod-slider-track"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
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
                  <div className="prod-slide-tech-badge">
                    {item.technicalName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="prod-slider-controls">
        <button
          className="prod-slider-button"
          onClick={handlePrev}
          aria-label="Previous product"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="prod-slider-dots">
          {sliderItems.map((_, idx) => (
            <button
              key={idx}
              className={`prod-slider-dot ${idx === activeDotIndex ? 'active' : ''}`}
              onClick={() => {
                if (!transitionEnabled) return;
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            />
          ))}
        </div>

        <button
          className="prod-slider-button"
          onClick={handleNext}
          aria-label="Next product"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
