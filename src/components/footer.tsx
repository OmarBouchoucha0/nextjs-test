import {
    DollarSign,
    Headphones,
    Truck,
    Shield,
    HelpCircle,
} from 'lucide-react';
import { Instagram, Facebook } from 'lucide-react';
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 w-full border-t border-gray-300">
            <div className="container px-6 py-8 w-full max-w-screen">
                {/* Grid container */}
                <div className="grid grid-cols-1 justify-between md:grid-cols-4 lg:grid-cols-4 gap-8 mb-4">

                    {/* Company Info */}
                    <div className="space-y-3 md:col-span-1">
                        <h3 className="text-lg font-bold">Abous Us</h3>
                        <p className="text-gray-600 text-sm">
                            Our mission is to give sneaker and streetwear fans, enthusiasts and the curious the chance to buy their favourite products with complete confidence. Whether you are looking for a limited edition product, the hottest pair at the moment or the perfect piece of streetwear, you have come to the right place.
                        </p>
                    </div>

                    {/* Customer Service */}
                    <div className="space-y-3   md:col-span-1 md:ml-auto">
                        <h4 className="text-lg font-bold">Customer Service</h4>
                        <ul className="space-y-2">
                            {[
                                { icon: <Headphones className="h-4 w-4" />, text: 'Contact Us' },
                                { icon: <HelpCircle className="h-4 w-4" />, text: 'FAQs' },
                                { icon: <Truck className="h-4 w-4" />, text: 'Shipping Info' },
                                { icon: <DollarSign className="h-4 w-4" />, text: 'Returns & Refunds' },
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-gray-500 mt-0.5 mr-2">{item.icon}</span>
                                    <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 md:col-span-1 md:ml-auto">
                        <h4 className="text-lg font-bold">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Privacy Policy'].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    {item === 'Privacy Policy' ? (
                                        <>
                                            <Shield className="h-4 w-4 text-gray-500 mt-0.5 mr-2" />
                                            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                                {item}
                                            </a>
                                        </>
                                    ) : (
                                        <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                                            {item}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-3 d:col-span-1 md:ml-auto">
                        <h4 className="text-lg font-bold">Follow Us</h4>
                        <div className="flex gap-4">
                            {[
                                { name: 'Instagram', icon: <Instagram className="h-5 w-5" /> },
                                { name: 'Facebook', icon: <Facebook className="h-5 w-5" /> },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="text-gray-600 hover:text-black transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>


                {/* Copyright */}
                <div className="border-t border-gray-300 pt-6 ">
                    <div className="text-center text-gray-500 text-sm">
                        <p>© {currentYear} CompanyName. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
