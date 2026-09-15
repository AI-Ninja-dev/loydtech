'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      // In a real app, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will get back to you shortly.' });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
      {submitStatus && (
        <div className={`p-4 rounded-lg ${
          submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
        } border ${
          submitStatus.type === 'success' ? 'border-green-500' : 'border-red-500'
        }`}>
          {submitStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground/90 placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground/90 placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
            Company (Optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground/90 placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0"
            placeholder="Enter your company"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-lg text-foreground/90 placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0"
            placeholder="How can we help you?"
          />
        </div>
        <Button variant="primary" size="md" isLoading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}