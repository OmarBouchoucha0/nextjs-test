import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
