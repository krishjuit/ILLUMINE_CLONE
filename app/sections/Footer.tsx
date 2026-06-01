'use client';

import React from 'react';
import ContactForm from '@/components/contact/ContactForm';

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black py-20 px-6 md:px-12 font-sans relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <ContactForm />
      </div>
    </footer>
  );
}