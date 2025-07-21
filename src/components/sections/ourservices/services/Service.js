'use client';

import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GradientButton from '@/components/ui/GradientButton';
import { getServiceById } from '@/services/apis';

export default function Service() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch service from backend
  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceById(id); // Assumes API returns { title, subtitle, ... }
        setService(data);
      } catch (err) {
        console.error('Failed to fetch service:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchService();
  }, [id]);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (loading) {
    return <p className="p-10 text-center text-gray-500">Loading...</p>;
  }

  if (!service) {
    return <p className="p-10 text-center text-red-500">Service not found.</p>;
  }

  return (
    <div className="relative min-h-screen w-full text-gray-800 dark:text-white select-none px-4 py-16 sm:py-16 md:py-10 lg:py-14 xl:py-16 md:px-10 lg:px-20">

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center py-8 bg-black dark:bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
        <p className="text-lg mt-2">{service.subtitle}</p>
        <p className="text-sm mt-4">{service.description}</p>

        {/* {service.buttonText && (
          <GradientButton className="mt-4">{service.buttonText}</GradientButton>
        )} */}
      </motion.section>

      {/* About Section */}
      {service.about && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold text-center">{service.about.heading}</h2>
          <div className="mt-6 max-w-xl mx-auto">
            <ol className="list-decimal list-inside space-y-3 text-justify dark:text-gray-200 text-gray-700">
              {service.about.description?.map((para, i) => (
                <li key={i} className="pl-1">
                  {para}
                </li>
              ))}
            </ol>
          </div>

        </motion.section>
      )}

      {/* Offerings */}
      {service.offerings?.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">What we offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 hover:scale-105 transition-all duration-100 ease-in-out shadow-lg bg-white dark:bg-black/10 backdrop-blur-md border border-gray-600 rounded-lg text-center"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Process */}
      {service.process?.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">Our Process</h2>
          <div className="flex flex-wrap justify-center gap-4 text-purple-200 font-medium">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-4 py-2 border-b-2 hover:scale-110 transition-all duration-300 ease-in-out border-purple-600"
              >
                {step}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA
      {service.callToAction?.text && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center flex flex-col justify-center items-center mb-20"
        >
          <GradientButton as="link" href={service.callToAction.link}>
            {service.callToAction.text}
          </GradientButton>
        </motion.div>
      )} */}
    </div>
  );
}
