import { Link } from 'react-router-dom'
// import { Coins, Mail, Phone, MapPin, Twitter, Linkedin } from 'lucide-react'
import { Coins, Mail, Phone, MapPin } from 'lucide-react'
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaFacebook
} from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Coins className="h-8 w-8 text-primary-400" />
                            <span className="text-xl font-bold">MASFO GLOBAL</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Leading crypto education academy in Maiduguri, Borno State, Nigeria.
                            Empowering the next generation of blockchain professionals.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/courses" className="text-gray-400 hover:text-primary-400 transition">Courses</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition">Contact</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" className="text-gray-400 hover:text-primary-400 transition">FAQ</Link></li>
                            <li><Link to="/help" className="text-gray-400 hover:text-primary-400 transition">Help Center</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-primary-400 transition">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                                <span className="text-gray-400">Maiduguri, Borno State, Nigeria</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary-400" />
                                <span className="text-gray-400">info@masfoglobal.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary-400" />
                                <span className="text-gray-400">+234 (0) 123 456 789</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 MASFO GLOBAL. All rights reserved. Built in Maiduguri, Nigeria.</p>
                </div>
            </div>
        </footer>
    )
}