import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input"
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 transition-all hover:bg-white/100 border-b">
            <div aria-describedby="this is the navigation bar" className="flex justify-between items-center  h-[4vw]">
                <div className="order-1 p-4 items-center">

                    <NavigationMenu>
                        <NavigationMenuList className="gap-1">
                            <NavigationMenuItem className='pr-2'>
                                <NavigationMenuLink href="/" className="flex items-center gap-1">
                                    <h1 className="inline-flex font-extrabold">
                                        <span className="text-3xl text-shadow">
                                            LOGO
                                        </span>
                                    </h1>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className=''>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    Men
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className=''>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    Women
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className=''>
                                <NavigationMenuLink href="#" className="flex items-center gap-1">
                                    Kids
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

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
                            <NavigationMenuItem className='h-[28px] w-[28px]'>
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
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div >
        </nav >
    )
}
