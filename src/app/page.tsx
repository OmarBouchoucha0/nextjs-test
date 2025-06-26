import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
    return (
        <main className="flex flex-col gap-6 md:gap-8 w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] min-h-[300px] max-h-[600px] overflow-hidden">
                <Image
                    src="/walking.jpg"
                    alt="Sneaker promotion"
                    fill
                    className="object-cover w-full"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-4 md:px-8">
                    <div className="space-y-4 bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-full md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]">
                        <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">
                            New Collection
                        </h1>
                        <h2 className="text-gray-500 text-base md:text-lg lg:text-xl">
                            The pieces everyone wants right now.
                        </h2>
                        <Button
                            asChild
                            className="rounded-lg mt-2 md:mt-4 h-10 md:h-12 w-full md:w-auto"
                        >
                            <Link href="#">
                                Discover
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Carousel Sections */}
            {['NEW', 'Featured Sneakers', 'Popular Sneakers'].map((title) => (
                <section key={title} className="w-full space-y-4 px-4 md:px-6">
                    <h2 className="text-xl md:text-2xl font-bold text-start">
                        {title}
                    </h2>
                    <div className="flex justify-center">
                        <Carousel
                            className="w-full max-w-full cursor-grab"
                            opts={{ align: "start", dragFree: true }}
                        >
                            <CarouselContent className="ml-0">
                                {Array.from({ length: 9 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="pl-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                                    >
                                        <div className="p-1 md:p-2">
                                            <Card className="border-none shadow-none cursor-pointer ">
                                                <CardContent className="flex flex-col p-2">
                                                    <div className="relative aspect-[4/3] w-full mb-2 rounded-lg overflow-hidden">
                                                        <Image
                                                            src="/nikeAF1.jpg"
                                                            alt={`Nike Air Force 1 ${index + 1}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                                            priority={index < 3}
                                                            quality={75}
                                                        />
                                                    </div>

                                                    <div className="text-start">
                                                        <h3 className="font-medium text-sm md:text-base">Nike Air Force 1</h3>
                                                        <p className="text-gray-600 text-xs md:text-sm">Classic White</p>
                                                        <p className="font-bold text-sm md:text-base">{(120 + index * 10).toFixed(2)}DT</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex cursor-pointer" />
                            <CarouselNext className="hidden md:flex cursor-pointer" />
                        </Carousel>
                    </div>
                </section>
            ))}
        </main>
    );
}
