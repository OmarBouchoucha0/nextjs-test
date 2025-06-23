import Link from 'next/link'
import Image from 'next/image'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Search, Menu, User, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xs transition-all hover:bg-white/100 border-b">
            <div className="flex justify-between items-center  h-[4vw]">
                <div className="order-1 p-4 items-center">
                    <h1 className="inline-flex font-extrabold">
                        <span className="text-3xl text-shadow">
                            LOGO
                        </span>
                    </h1>
                </div>
                <div className="order-2 relative w-[40vw]">
                    <div className="relative flex items-center">
                        <Input
                            type="text"
                            placeholder="Search For A Model"
                            className="w-full pr-10 pl-4 py-2 rounded-xs border-gray-300 focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute right-3 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                </div>            <div className="order-3 p-4">
                    <NavigationMenu className="max-w-full p-2">
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    <User />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    <Heart />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    <ShoppingCart />
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="#" >
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant="outline">  <Menu className="h-4 w-4" /></Button>
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader className="p-0">
                                                <div className="relative h-[20vh] w-full overflow-hidden">
                                                    <Image
                                                        src="/sneackers.jpg"
                                                        alt="sneacker-mix"
                                                        fill
                                                        className="object-cover object-center"
                                                        sizes="500vw"
                                                    />
                                                </div>
                                                <SheetTitle className="text-4xl px-2">Our Products</SheetTitle>
                                            </SheetHeader>
                                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                                <div className="grid gap-3 border-b border-gray-300">
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger className="hover:underline cursor-pointer">Men</AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul>
                                                                    <li>Nike</li>
                                                                    <li>Adidas</li>
                                                                    <li>New Balance</li>
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                                <div className="grid gap-3 border-b border-gray-300">
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger className="hover:underline cursor-pointer">Women</AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul>
                                                                    <li>Nike</li>
                                                                    <li>Adidas</li>
                                                                    <li>New Balance</li>
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                                <div className="grid gap-3 border-b border-gray-300">
                                                    <Accordion type="single" collapsible>
                                                        <AccordionItem value="item-1">
                                                            <AccordionTrigger className="hover:underline cursor-pointer">Kids</AccordionTrigger>
                                                            <AccordionContent>
                                                                <ul>
                                                                    <li>Nike</li>
                                                                    <li>Adidas</li>
                                                                    <li>New Balance</li>
                                                                </ul>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div >
        </nav>
    )
}
