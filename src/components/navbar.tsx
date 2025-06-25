import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { FcGoogle } from "react-icons/fc"; // Google's G logo
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
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
                            <NavigationMenuItem >
                                <Dialog>
                                    <form>
                                        <DialogTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="hover:bg-gray-200 rounded-lg"
                                            >
                                                <User className="h-5 w-5" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent >

                                            <DialogHeader>
                                                <div className="flex items-center justify-between w-full py-2">
                                                    <DialogTitle className="mb-0">Login to your account</DialogTitle>
                                                    <Button variant="link" className="p-0 h-auto cursor-pointer">
                                                        Sign Up
                                                    </Button>
                                                </div>

                                            </DialogHeader>

                                            <div className="grid gap-4">
                                                <div className="grid gap-3">
                                                    <Label htmlFor="email">Email</Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="m@example.com"
                                                        required
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <div className="flex items-center">
                                                        <Label htmlFor="password">Password</Label>
                                                        <a
                                                            href="#"
                                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                        >
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                    <Input id="password" type="password" required />
                                                </div>
                                            </div>
                                            <DialogFooter className="w-full ">
                                                <div className="w-full space-y-3 ">
                                                    <Button type="submit" className="w-full cursor-pointer">
                                                        Login
                                                    </Button>
                                                    <Button variant="outline" className="w-full border border-black cursor-pointer">
                                                        <FcGoogle className="text-lg" />
                                                        Login with Google
                                                    </Button>
                                                </div>
                                            </DialogFooter>
                                        </DialogContent>
                                    </form>
                                </Dialog>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost">
                                            <Heart />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle className="text-3xl">Wishlist</SheetTitle>
                                        </SheetHeader>
                                        <div className="grid flex-1 auto-rows-min gap-6 px-4 items-center">
                                            <div className="grid gap-3 border-t-black justify-center">
                                                Wishlist Is Currently Empty
                                            </div>
                                        </div>
                                        <SheetFooter className="border-t-black">
                                            <Button type="submit">Add All To Cart</Button>
                                            <SheetClose asChild>
                                                <Button variant="outline">Close</Button>
                                            </SheetClose>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="ghost">
                                            <ShoppingCart />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle className="text-3xl">Cart</SheetTitle>
                                        </SheetHeader>
                                        <div className="grid flex-1 auto-rows-min gap-6 px-4 items-center">
                                            <div className="grid gap-3 border-t-black justify-center">
                                                Nothing Currently In Cart
                                            </div>
                                        </div>
                                        <SheetFooter className="border-t-black">
                                            <Button type="submit">Check Out</Button>
                                            <SheetClose asChild>
                                                <Button variant="outline">Close</Button>
                                            </SheetClose>
                                        </SheetFooter>
                                    </SheetContent>
                                </Sheet>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div >
        </nav >
    )
}
