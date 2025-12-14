import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Mail, Truck, Clock } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    const text = `New Inquiry from ${formData.name} (${formData.phone}): ${formData.message}`;
    const waLink = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Ready to order? Get in touch with us today."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="text-red-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Phone className="text-red-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="text-red-700 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Truck className="w-5 h-5" /> Delivery Coverage
              </h3>
              <p className="text-gray-300 mb-4">We deliver high-quality bricks to the following areas:</p>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_INFO.deliveryAreas.map(area => (
                  <span key={area} className="px-3 py-1 bg-red-800 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Inquiry</h3>
            <p className="text-gray-600 mb-6">Fill out the form and we will call you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
                  placeholder="017..."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-3 border"
                  placeholder="I need 5000 bricks for..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button type="submit" fullWidth>
                Send Message via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};