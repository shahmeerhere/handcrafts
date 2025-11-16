import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiSecurePaymentFill, RiRefund2Line } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            {/* Services Section */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-950 to-black py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {[
                            { Icon: CiDeliveryTruck, title: "Free Delivery", desc: "Fast & secure delivery worldwide" },
                            { Icon: RiRefund2Line, title: "Easy Returns", desc: "30-day return policy" },
                            { Icon: IoChatboxOutline, title: "24/7 Support", desc: "Always here to help you" },
                            { Icon: RiSecurePaymentFill, title: "Secure Payment", desc: "Safe & encrypted transactions" },
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                                    <item.Icon className="text-5xl sm:text-6xl text-blue-300 mx-auto mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300" />
                                    <h3 className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                                    <p className="text-blue-200 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <footer className="bg-gradient-to-br from-white to-gray-100 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* About Us */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-black mb-4">About Handcrafts</h3>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Where timeless craftsmanship meets modern elegance. Each pair is a testament to luxury, comfort, and unmatched durability.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110">
                                    <FaFacebookF className="text-2xl" />
                                </Link>
                                <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110">
                                    <FaInstagram className="text-2xl" />
                                </Link>
                                <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110">
                                    <FaXTwitter className="text-2xl" />
                                </Link>
                                <Link href="/" className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110">
                                    <FaTiktok className="text-2xl" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Quick Links</h3>
                            <ul className="space-y-3 text-sm sm:text-base">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/about", label: "About" },
                                    { href: "/contact", label: "Contact" },
                                    { href: "/shop", label: "Shop" },
                                    { href: "/blog", label: "Blog" }
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-slate-600 hover:text-blue-600 transition hover:translate-x-2 inline-block">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Customer Service</h3>
                            <ul className="space-y-3 text-sm sm:text-base">
                                {[
                                    { href: "/shipping-info", label: "Shipping Info" },
                                    { href: "/return-policy", label: "Returns & Exchanges" },
                                    { href: "/faq", label: "FAQ" },
                                    { href: "/track", label: "Track Your Order" }
                                ].map((link, i) => (
                                    <li key={i}>
                                        <Link href={link.href} className="text-slate-600 hover:text-blue-600 transition hover:translate-x-2 inline-block">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Contact Us</h3>
                            <div className="space-y-3 text-sm sm:text-base text-slate-600">
                                <p>
                                    <span className="font-medium">Email:</span><br />
                                    <a href="mailto:info@handcrafts.com" className="text-blue-600 hover:underline">info@abcc.com</a>
                                </p>
                                <p>
                                    <span className="font-medium">Phone:</span><br />
                                    <span>+1 (555) 123-4567</span>
                                </p>
                                <p>
                                    <span className="font-medium">Address:</span><br />
                                    <span>123 Fashion Street<br />New York, NY 10001</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="border-t border-slate-200 pt-6 sm:pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="flex items-center space-x-3 sm:space-x-4 flex-wrap">
                                <span className="text-slate-600 font-medium">We Accept:</span>
                                <div className="flex space-x-3">

                                    <img src="/jc.png" alt="JazzCash" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition" />

                                    <img src="/ep.png" alt="EasyPaisa" className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto object-containopacity-80 hover:opacity-100 transition" />

                                    <img src="https://cdn.shopify.com/s/files/1/0562/8503/6605/files/visa-group.png?v=1740564130" alt="Visa" className="h-8 opacity-70 hover:opacity-100 transition" />
                                    <img src="https://cdn.shopify.com/s/files/1/0562/8503/6605/files/mastercard-group.png?v=1740564130" alt="Mastercard" className="h-8 opacity-70 hover:opacity-100 transition" />
                                </div>
                            </div>
                            <div className="text-slate-500 text-xs sm:text-sm">
                                © 2025 Handcrafts. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export const metadata = {
    title: "Handcrafts - Exquisite Handmade Footwear",
    description: "Discover our collection of artisanal shoes, crafted with passion and precision. Experience comfort and style like never before.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default Footer;
