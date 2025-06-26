import {
    DollarSign,
    Headphones,
    Truck,
    Shield,
    HelpCircle,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 w-full border-t border-gray-300 mt-auto">
            <div className="container mx-auto py-6">
                <div className=" flex justify-between">

                    <div className="space-y-2 w-full max-w-1/4">
                        <h3 className="text-lg font-bold text-black">Company Name</h3>
                        <p className="text-gray-500">
                            Your one-stop destination for quality products at affordable prices.
                        </p>
                    </div>

                    <div className="space-y-2 w-full max-w-1/4">
                        <h4 className="text-lg font-bold text-black">Customer Service</h4>
                        <ul className="space-y-2 ">
                            <li className="flex items-center space-x-2 text-gray-500">
                                <Headphones className="h-4 w-4 " />
                                <a href="#" className="hover:text-black transition-colors">Contact Us</a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-500">
                                <HelpCircle className="h-4 w-4" />
                                <a href="#" className="hover:text-black transition-colors">FAQs</a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-500 ">
                                <Truck className="h-4 w-4 " />
                                <a href="#" className="hover:text-black transition-colors">Shipping Info</a>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-500">
                                <DollarSign className="h-4 w-4 " />
                                <a href="#" className="hover:text-black transition-colors">Returns & Refunds</a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2  max-w-1/4">
                        <h4 className="text-lg font-semibold text-black">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-500 hover:text-black transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-black transition-colors">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-black transition-colors">Careers</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Shield className="h-4 w-4 text-gray-500" />
                                <a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="bg-gray-100 pb-2">
                <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                    <p>© {currentYear} CompanyName. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

