import { ArrowDownUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MenPage() {
    const sneakers = [
        { id: 1, name: 'Air Jordan 1 Retro', price: 180, image: '/jordan1.jpg' },
        { id: 2, name: 'Nike Dunk Low', price: 120, image: '/dunk-low.jpg' },
        { id: 3, name: 'Adidas Samba', price: 100, image: '/samba.jpg' },
        { id: 4, name: 'New Balance 550', price: 130, image: '/nb550.jpg' },
        { id: 5, name: 'Converse Chuck 70', price: 85, image: '/chuck70.jpg' },
        { id: 6, name: 'Yeezy Boost 350', price: 220, image: '/yeezy350.jpg' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Title */}
            <h1 className="text-3xl font-bold mb-8">Mens Sneakers</h1>

            {/* Results and Sort Bar */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-gray-600">
                    {sneakers.length} results
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                    <span>Sort By</span>
                    <ArrowDownUp className="h-4 w-4" />
                </button>
            </div>

            {/* Sneakers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sneakers.map((sneaker) => (
                    <Link href={`/product/${sneaker.id}`} key={sneaker.id} className="group">
                        <div key={sneaker.id} className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-2">
                                <Image
                                    src={sneaker.image}
                                    alt={sneaker.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                                />
                            </div>
                            <div className="mt-2">
                                <h3 className="font-medium">{sneaker.name}</h3>
                                <p className="text-gray-600">{sneaker.price}DT</p>
                            </div>
                        </div>
                    </ Link>
                ))}
            </div>
        </div>
    );
}
