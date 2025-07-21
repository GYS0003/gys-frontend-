'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { getGalleryImages } from '@/services/apis';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getGalleryImages();
      setImages(data);
    } catch (err) {
      console.error('Failed to load gallery images:', err);
      setError('Failed to load images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen relative z-10 text-white py-16 px-4"
      aria-label="Gallery"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-10"
      >
        GYS Gallery
      </motion.h2>

      {error ? (
        <div className="text-center">
          <p className="text-red-300 mb-4">{error}</p>
          <button
            onClick={fetchImages}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
            aria-label="Retry loading images"
          >
            Retry
          </button>
        </div>
      ) : loading ? (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto px-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="mb-4 aspect-square rounded-md bg-gray-700 animate-pulse"
              aria-label="Loading image"
            />
          ))}
        </div>
      ) : (
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 max-w-6xl mx-auto px-4"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {images.map((img, idx) => (
            <motion.div
              key={img._id || idx}
              className="mb-4 overflow-hidden shadow-lg break-inside-avoid group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative  w-full">
                <img
                  src={img?.imageUrl}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-auto rounded-md transition duration-300 group-hover:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}