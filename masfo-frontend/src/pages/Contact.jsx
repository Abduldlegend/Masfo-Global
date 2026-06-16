import { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  // Twitter, 
  // Linkedin, 
  // Github,
  // Facebook,
  // Instagram,
  CheckCircle,
  AlertCircle,
  Globe
} from 'lucide-react'
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaFacebook,
    FaInstagram
} from "react-icons/fa";
import { Card } from '../components/common/Card'
import { Button } from '../components/common/Button'
import toast from 'react-hot-toast'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Maiduguri, Borno State', 'Nigeria'],
      action: { text: 'Get Directions', link: 'https://maps.google.com' }
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+234 (0) 123 456 789', '+234 (0) 987 654 321'],
      action: { text: 'Call Now', link: 'tel:+234123456789' }
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@masfoglobal.com', 'support@masfoglobal.com'],
      action: { text: 'Send Email', link: 'mailto:info@masfoglobal.com' }
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
      action: { text: 'Sunday: Closed', link: '#' }
    }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/masfoglobal', color: 'hover:bg-[#1DA1F2]' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/company/masfoglobal', color: 'hover:bg-[#0077B5]' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/masfoglobal', color: 'hover:bg-[#1877F2]' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/masfoglobal', color: 'hover:bg-[#E4405F]' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/masfoglobal', color: 'hover:bg-[#333333]' },
    { name: 'Telegram', icon: MessageCircle, url: 'https://t.me/masfoglobal', color: 'hover:bg-[#26A5E4]' }
  ]

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our courses, click on the course you\'re interested in, and click the "Enroll Now" button. You\'ll need to create an account or log in to complete the enrollment process.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes! Upon successful completion of any course, you\'ll receive a blockchain-verified NFT certificate that you can share on your LinkedIn profile or portfolio.'
    },
    {
      question: 'Are the courses self-paced?',
      answer: 'Yes, all our courses are self-paced. You can learn at your own speed and access the course materials anytime, anywhere.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee for all paid courses. If you\'re not satisfied, contact our support team within 7 days of purchase.'
    },
    {
      question: 'Is there a community for students?',
      answer: 'Absolutely! All enrolled students get access to our exclusive Discord community where you can interact with instructors and fellow learners.'
    },
    {
      question: 'Do you offer job placement assistance?',
      answer: 'Yes, we have a dedicated job board and career support services to help you find opportunities in the Web3 space.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contact <span className="text-white">Us</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Get in touch with us. We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-16">
        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition">
                <info.icon className="h-8 w-8 text-primary-600 group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-bold mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
              ))}
              <a 
                href={info.action.link}
                className="inline-block mt-3 text-primary-600 hover:text-primary-700 text-sm font-semibold"
              >
                {info.action.text} →
              </a>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Have questions? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Course Inquiry, Support, Partnership, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Sidebar - Social & Additional Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <Card className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Connect With Us</h3>
                <p className="text-gray-600">Follow us on social media</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${social.color} hover:text-white`}
                  >
                    <social.icon className="h-6 w-6" />
                    <span className="text-xs mt-2">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Map Location */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                {/* Google Maps Placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15741.89532350859!2d13.148294!3d11.830333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x112b75f62c5f37e9%3A0x7f8c5f8c5f8c5f8c!2sMaiduguri%2C%20Borno%2C%20Nigeria!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MASFO GLOBAL Location"
                />
              </div>
              <p className="text-gray-600 text-sm text-center">
                <MapPin className="h-4 w-4 inline mr-1" />
                Maiduguri, Borno State, Nigeria
              </p>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                <p className="text-gray-600 mb-4">
                  For urgent matters, call our support line
                </p>
                <a href="tel:+234123456789" className="text-2xl font-bold text-primary-600 hover:text-primary-700">
                  +234 (0) 123 456 789
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Available 24/7 for emergencies
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our academy
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new courses, events, and crypto news delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-sm opacity-80 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  )
}