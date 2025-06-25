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
                    <Carousel className="w-full mx-15 max-w-9/10 ">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 lg:basis-1/6">
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
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>
            </div>

            <div className="w-full space-y-2">
                <h2 className="text-2xl font-bold text-start px-5">
                    Featured Sneakers
                </h2>
                <div className="flex justify-center">
                    <Carousel className="w-full mx-15 max-w-9/10">
                        <CarouselContent className="-ml-1">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <CarouselItem key={index} className="pl-1 lg:basis-1/6">
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
                        <CarouselPrevious className="cursor-pointer" />
                        <CarouselNext className="cursor-pointer" />
                    </Carousel>
                </div>
            </div>
        </main>
    );
}
