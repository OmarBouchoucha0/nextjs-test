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
                    className=" object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-8">
                    <div className="space-y-4">
                        <h1 className="text-white text-3xl sm:text-4xl font-bold">New Drops!</h1>
                        <h2 className="text-white text-4xl sm:text-5xl font-bold">
                            EVERYTHING UNDER 200DT
                        </h2>
                        <Button
                            asChild
                            className="mt-4 bg-white text-black rounded-xs hover:scale-105 hover:bg-white"
                        >
                            <Link href="#">
                                SHOP NOW
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold text-start px-15">
                    New
                </h2>
                <Carousel className="w-full max-w-s px-15">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 lg:basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-4">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold text-start px-5">
                    Featured Sneakers
                </h2>
                <Carousel className="w-full max-w-l px-5">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 lg:basis-1/5">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-4">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    );
}
