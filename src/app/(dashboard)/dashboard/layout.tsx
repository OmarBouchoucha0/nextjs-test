export const metadata = {
    title: 'Admin Dashboard',
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="min-h-screen">{children}</div>
}
