import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error' | 'loading'
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('loading');
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(null), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  return (
    <section 
      ref={formRef}
      id="contact" 
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-emerald-500/10 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-teal-500/10 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Get in Touch
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text mt-2">
              Let's Start a Conversation
            </span>
          </h2>
          <p className={`text-lg text-slate-300 transition-all duration-700 delay-100 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Have questions about CopyStorm? We're here to help.
          </p>
        </div>

        {/* Contact Form */}
        <div className={`max-w-xl mx-auto transition-all duration-700 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg bg-slate-900/50 border ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    } placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 mt-1">{errors.name}</span>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg bg-slate-900/50 border ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    } placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInput}
                    rows="4"
                    className={`block w-full pl-10 pr-3 py-2 rounded-lg bg-slate-900/50 border ${
                      errors.message ? 'border-red-500' : 'border-slate-600'
                    } placeholder-slate-400 text-white focus:outline-none focus:border-emerald-500 transition-colors`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 mt-1">{errors.message}</span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-300 group-hover:scale-105" />
                  <div className="relative flex items-center gap-2 text-white font-medium">
                    {formStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>

            {/* Status Messages */}
            {formStatus === 'success' && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">
                Message sent successfully!
              </div>
            )}
            {formStatus === 'error' && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg">
                Error sending message. Please try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;