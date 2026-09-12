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
  AlertCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { candidate } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const validateForm = () => {
    const errs = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
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
          message: 'Thank you for reaching out! Your message was sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setToast({
          type: 'error',
          message: data.message || 'Unable to send message right now. Feel free to email me directly!'
        });
      }
    } catch (err) {
      setToast({
        type: 'error',
        message: 'Could not connect to the server. You can always email me directly at ' + candidate.email
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
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            I'm currently looking for full-time Software Engineering roles. Whether you have an opportunity, a question, or just want to connect, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Let's Connect
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  Feel free to reach out directly via email, phone, or through LinkedIn and GitHub.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${candidate.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail size={17} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Email</span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                        {candidate.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${candidate.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <Phone size={17} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Phone</span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                        {candidate.formattedPhone}
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block uppercase">Location</span>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                        {candidate.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700/60 flex items-center gap-3">
                <a
                  href={candidate.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium text-xs transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>

                <a
                  href={candidate.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 font-medium text-xs transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
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
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all ${
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
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all ${
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
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Role Opportunity: Java / Spring Boot Engineer"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all ${
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
                    className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Jaydeep, I came across your portfolio and would like to talk about a role..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition-all resize-none ${
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
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
