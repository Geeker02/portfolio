import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Server, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useKeepAliveWarm } from '../hooks/useKeepAliveWarm';

export const Contact = () => {
  const { candidate } = portfolioData;
  const { backendStatus } = useKeepAliveWarm();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (at least 2 characters).';
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setToast(null);

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({
          type: 'success',
          message: data.message || 'Message successfully sent! I will respond promptly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({
          type: 'error',
          message: data.message || 'Failed to dispatch message. Please try again.'
        });
      }
    } catch (err) {
      setToast({
        type: 'error',
        message: 'Network error communicating with the backend. Feel free to contact me directly at ' + candidate.email
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            I am available for full-time Software Engineering roles. Feel free to send a message or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & System Health Badge */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Direct Contact Channels
              </h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${candidate.email}`}
                  className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">EMAIL</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                      {candidate.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${candidate.phone}`}
                  className="flex items-start gap-3.5 group p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">PHONE / WHATSAPP</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                      {candidate.formattedPhone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-2 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">LOCATION</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {candidate.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                <a
                  href={candidate.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium text-xs transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={candidate.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium text-xs transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Free-Tier Infrastructure Live Status Card (FREE-02) */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 font-mono font-semibold text-slate-700 dark:text-slate-300">
                  <Server size={14} className="text-cyan-500" />
                  <span>REST API Heartbeat</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      backendStatus === 'online'
                        ? 'bg-emerald-500 animate-pulse'
                        : backendStatus === 'cold-starting'
                        ? 'bg-amber-500 animate-bounce'
                        : 'bg-cyan-500 animate-ping'
                    }`}
                  />
                  <span className="font-mono text-[11px] text-slate-500 capitalize">
                    {backendStatus === 'online' ? 'Warm / Ready' : backendStatus === 'cold-starting' ? 'Waking container...' : 'Prefetched'}
                  </span>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                Render free-tier cold start mitigation is active. Backend container is automatically warmed in background.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send a Message
              </h3>

              {/* Toast Feedback */}
              {toast && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm animate-fadeIn ${
                    toast.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800'
                      : 'bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200 border border-rose-300 dark:border-rose-800'
                  }`}
                >
                  {toast.type === 'success' ? (
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <p>{toast.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${
                        errors.name
                          ? 'border-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-cyan-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${
                        errors.email
                          ? 'border-rose-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-cyan-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    SUBJECT *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity: Java / Spring Boot"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${
                      errors.subject
                        ? 'border-rose-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-cyan-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-rose-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jaydeep, we reviewed your work and would love to schedule a conversation..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500'
                        : 'border-slate-300 dark:border-slate-700 focus:border-cyan-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Dispatching Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
