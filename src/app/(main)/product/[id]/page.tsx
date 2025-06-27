"use client"
import { ChevronLeft, Star, Truck, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    images: string[];
    sizes: number[];
    variants: string[];
    rating: number;
    reviews: number;
}

export default function ProductPage() {
    const product: Product = {
        id: "1",
        name: 'Chuck 70s',
        price: 120,
        originalPrice: 145,
        images: [
            '/x.jpg',
        ],
        sizes: [39, 40, 43, 44, 45],
        variants: ['White', 'Black', 'Red'],
        rating: 4.8,
        reviews: 124
    };

    return (
        <div className="container mx-auto px-4 py-8">

            <Link href="/men" className="flex items-center text-gray-600 mb-6 hover:text-black transition-colors">
                <ChevronLeft className="h-5 w-5 mr-1" />
                Back to Mens Sneakers
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                        src="/chuck70.jpg"
                        alt="Product image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                    <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-600 text-sm">{product.rating} ({product.reviews} reviews)</span>
                    </div>

                    <div className="mb-6">
                        <span className="text-2xl font-bold">${product.price}</span>
                        {product.originalPrice && (
                            <span className="ml-2 text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                    </div>



                    <div className="mb-8">
                        <h3 className="font-medium mb-3">Size</h3>
                        <RadioGroup
                            defaultValue={product.sizes.find(size => size === 40)?.toString()}
                            className="grid grid-cols-7 gap-2 w-fit"
                            onValueChange={(value) => console.log(value)} // Add this to track selection
                        >
                            {Array.from({ length: 7 }, (_, i) => {
                                const size = i + 39;
                                const isAvailable = product.sizes.includes(size);

                                return (
                                    <div key={size} className="relative">
                                        <RadioGroupItem
                                            value={size.toString()}
                                            id={`size-${size}`}
                                            disabled={!isAvailable}
                                            className="peer absolute inset-0 opacity-0" // Hidden but interactive
                                        />
                                        <label
                                            htmlFor={`size-${size}`}
                                            className={`
               w-12 h-12 flex items-center justify-center
              border rounded-md text-sm font-medium
              transition-colors select-none
              ${!isAvailable
                                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                                    : `
                  cursor-pointer border-gray-300
                  peer-data-[state=checked]:bg-black
                  peer-data-[state=checked]:text-white
                  peer-data-[state=checked]:border-black
                `
                                                }
            `}
                                        >
                                            {size}
                                        </label>
                                    </div>
                                );
                            })}
                        </RadioGroup>
                    </div>

                    <div className="mb-8">
                        <h3 className="font-medium mb-3">Color</h3>
                        <RadioGroup
                            defaultValue={product.variants[0]}
                            className="flex gap-3"
                        >
                            {product.variants.map((color) => (
                                <div key={color} className="relative">
                                    {/* Hidden radio input */}
                                    <RadioGroupItem
                                        value={color}
                                        id={`color-${color}`}
                                        className="absolute  w-8 h-8"
                                    />
                                    {/* Custom color circle */}
                                    <label
                                        htmlFor={`color-${color}`}
                                        className={`
            block w-8 h-8 rounded-full cursor-pointer
            border-2 border-transparent hover:border-gray-400
            ${/* Selected state - black border */''}
            peer-data-[state=checked]:border-black
          `}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    >
                                        <span className="sr-only">{color}</span>
                                    </label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Add to Cart */}
                    <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-6">
                        Add to Cart
                    </button>

                    {/* Shipping Info */}
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center text-gray-600 mb-2">
                            <Truck className="h-5 w-5 mr-2" />
                            <span>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <Shield className="h-5 w-5 mr-2" />
                            <span>30-day return policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
