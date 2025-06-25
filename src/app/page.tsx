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
        <main className="grid grid-flow-col grid-rows-4 gap-2 w-full ">
            <div className=" relative row-span-2 w-full overflow-hidden">
                <Image
                    src="/walking.jpg"
                    alt="Sneaker promotion"
                    fill
                    className="object-cover w-full"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-20">
                    <div className="space-y-4 bg-white p-8 rounded-s shadow-accent-foreground w-full max-w-1/4">
                        <h1 className="text-black text-4xl  font-bold">
                            New Collection
                        </h1>
                        <h2 className="text-gray-500 text-xl font-ligth">
                            The pieces everyone wants right now.
                        </h2>
                        <Button
                            asChild
                            className="rounded-s mt-4 h-12"
                        >
                            <Link href="#">
                                Discover
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full space-y-2 pt-5">
                <h2 className="text-2xl font-bold text-start px-5 ml-15">
                    NEW
                </h2>
                <div className="flex justify-center">
                    <Carousel className="w-full mx-auto max-w-9/10 cursor-grab" opts={{
                        align: "start", // Disables center snapping
                        dragFree: true, // Enables free scrolling
                    }}>
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/4 ">
                                    <div className="p-1">
                                        <Card className="border-none shadow-none cursor-pointer">
                                            <CardContent className="flex flex-col p-2">
                                                <div className="relative aspect-[4/3] w-full mb-2 rounded-lg overflow-hidden">
                                                    <Image
                                                        src="/nikeAF1.jpg"
                                                        alt={`Nike Air Force 1 ${index + 1}`}
                                                        fill
                                                        className="object-cover "
                                                        priority={index < 3}
                                                        quality={75}
                                                    />
                                                </div>

                                                <div className="text-start">
                                                    <h3 className="font-medium text-sm">Nike Air Force 1</h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Classic White</p>
                                                    <p className="font-bold ">{(120 + index * 10).toFixed(2)}DT</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>
            </div>

            <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold text-start px-5 ml-15">
                    Featured Sneakers
                </h2>
                <div className="flex justify-center">
                    <Carousel className="w-full mx-auto max-w-9/10 cursor-grab" opts={{
                        align: "start",
                        dragFree: true,
                    }}>
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1/4 ">
                                    <div className="p-1">
                                        <Card className="border-none shadow-none cursor-pointer">
                                            <CardContent className="flex flex-col p-2">
                                                <div className="relative aspect-[4/3] w-full mb-2 rounded-lg overflow-hidden">
                                                    <Image
                                                        src="/nikeAF1.jpg"
                                                        alt={`Nike Air Force 1 ${index + 1}`}
                                                        fill
                                                        className="object-cover "
                                                        priority={index < 3}
                                                        quality={75}
                                                    />
                                                </div>

                                                <div className="text-start">
                                                    <h3 className="font-medium text-sm">Nike Air Force 1</h3>
                                                    <p className="text-gray-600 dark:text-gray-400 text-sm">Classic White</p>
                                                    <p className="font-bold mt-">{(120 + index * 10).toFixed(2)}DT</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>
            </div>
        </main>
    );
}
