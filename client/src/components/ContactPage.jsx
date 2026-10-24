import React, { useState } from 'react';
import { contactStyles } from '../assets/dummyStyles';
import { toast, ToastContainer } from 'react-toastify';
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones, Sparkles,Popcorn } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow digits for phone and limit to 10 chars
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: digits }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone is exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error('⚠️ Please enter a valid 10-digit phone number.');
      console.warn('Submit blocked - invalid phone:', formData.phone);
      return;
    }

    // Validate subject is selected
    if (!formData.subject) {
      toast.error('⚠️ Please select a subject.');
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(formData.email
    )}%0APhone: ${encodeURIComponent(formData.phone
    )}%0ASubject: ${encodeURIComponent(formData.subject
    )}%0AMessage: ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/8299431275?text=${whatsappMessage}`, '_blank');
    setFormData({
      name:"",
      email:"",
      phone:"",
      subject:"",
      message:""
    })
  };

  return (
    <div className={contactStyles.pageContainer}>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar ={false} newestOnTop closeOnClick rtl={false} draggable pausedOnHover theme="dark" />

      {/* Background elements */}
      <div className={contactStyles.bgGradient}></div>
      <div className={contactStyles.bgBlob1}></div>
      <div className={contactStyles.bgBlob2}></div>

      {/* Film strips */}
      <div className={contactStyles.filmStripTop}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={`top-${i}`} className={contactStyles.filmStripSegment}></div>
        ))}
      </div>
      <div className={contactStyles.filmStripBottom}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={`bottom-${i}`} className={contactStyles.filmStripSegment}></div>
        ))}
      </div>

      <div className={contactStyles.contentContainer}>
        {/* Header */}
        <div className={contactStyles.headerContainer}>
          <h1 className={contactStyles.headerTitle}>
            <span className={contactStyles.headerTitleWhite}>Get In </span>
            <span className={contactStyles.headerTitleRed}>Touch</span>
          </h1>
          <p className={contactStyles.headerSubtitle}>
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond via WhatsApp or Email.
          </p>
        </div>

        {/* Grid layout */}
        <div className={contactStyles.gridContainer}>
          {/* Form Card */}
          <div className={contactStyles.cardRelative}>
            <div className={contactStyles.cardGradient}></div>
            <div className={contactStyles.cardContainer}>
              <div className={contactStyles.cardBadge}>
                <Sparkles className={contactStyles.cardIcon} /> Contact Us
              </div>
              <h2 className={contactStyles.formTitle}>
                <MessageSquare className={contactStyles.formTitleIcon} />
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className={contactStyles.form}>
                <div className={contactStyles.formGrid}>
                  <div>
                    <label className={contactStyles.inputGroup}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className={contactStyles.input}
                    />
                  </div>
                  <div>
                    <label className={contactStyles.inputGroup}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className={contactStyles.input}
                    />
                  </div>
                </div>

                <div>
                  <label className={contactStyles.inputGroup}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit phone number"
                    maxLength={10}
                    required
                    className={contactStyles.input}
                  />
                </div>

                <div>
                  <label className={contactStyles.inputGroup}>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={contactStyles.select}
                  >
                    <option value="" disabled className="bg-gray-800 text-gray-400">Select a subject</option>
                    <option value="Ticket Booking" className="bg-gray-800 text-white">Ticket Booking</option>
                    <option value="Group Events" className="bg-gray-800 text-white">Group Events</option>
                    <option value="Membership Inquiry" className="bg-gray-800 text-white">Membership Inquiry</option>
                    <option value="Technical Issue" className="bg-gray-800 text-white">Technical Issue</option>
                    <option value="Refund Request" className="bg-gray-800 text-white">Refund Request</option>
                    <option value="Other" className="bg-gray-800 text-white">Other</option>
                  </select>
                </div>

                <div>
                  <label className={contactStyles.inputGroup}>Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className={contactStyles.textarea}
                  />
                </div>

                <button type="submit" className={contactStyles.submitButton}>
                  Send via WhatsApp
                  <Send className={contactStyles.buttonIcon} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            <div className={contactStyles.cardRelative}>
              <div className={contactStyles.cardGradient}></div>
              <div className={contactStyles.cardContainer}>
                <div className ={contactStyles.cardBadge}>
                  <Popcorn className ={contactStyles.cardIcon} />
                    Contact Information
                  </div>
               
                
                <div className={contactStyles.contactInfo}>
                  <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <Phone className={contactStyles.contactIcon} />
                    </div>
                    <div>
                      <div className={contactStyles.contactText}>Phone</div>
                      <div className={contactStyles.contactDetail}>+91 8299431275</div>
                      <div className={contactStyles.contactSubDetail}>Available Mon - Sun (9 AM - 11 PM)</div>
                    </div>
                  </div>

                  <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <Mail className={contactStyles.contactIcon} />
                    </div>
                    <div>
                      <div className={contactStyles.contactText}>Email</div>
                      <div className={contactStyles.contactDetail}>contact@cinverseservices.com</div>
                      <div className={contactStyles.contactSubDetail}>Quick support within 24 hours</div>
                    </div>
                  </div>

                  <div className={contactStyles.contactItem}>
                    <div className={contactStyles.contactIconContainer}>
                      <MapPin className={contactStyles.contactIcon} />
                    </div>
                    <div>
                      <div className={contactStyles.contactText}>Location</div>
                      <div className={contactStyles.contactDetail}>Cinverse Hub, Film City</div>
                      <div className={contactStyles.contactSubDetail}>Mumbai, Maharashtra, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Support Card */}
            <div className={contactStyles.cardRelative}>
              <div className={contactStyles.emergencyCardGradient}></div>
              <div className={contactStyles.emergencyCard}>
                <div className={contactStyles.emergencyTitle}>
                  <Headphones className={contactStyles.emergencyIcon} />
                  24/7 Booking Support
                </div>
                <p className={contactStyles.emergencyText}>
                  Having urgent issues with your movie ticket booking or payment? Contact our emergency helpline directly.
                </p>
                <div className="flex items-center">
                  <span className={contactStyles.emergencyHotline}>Hotline: +91 8299431275</span>
                  <span className={contactStyles.emergencyNote}>Toll-Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
