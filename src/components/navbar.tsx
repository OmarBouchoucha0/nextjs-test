import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
    return (
        <div>
            <div>
                <NavigationMenu>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href="/">Men</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/">Women</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/">Kids</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenu>
            </div>
        </div>
    )
}
