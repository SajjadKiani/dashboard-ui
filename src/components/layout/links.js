import { LayoutDashboard, BarChartBig, Bell, ShoppingCart, NotebookText, Mails } from "lucide-react"
 
const Links = [
    {title: 'dashboard', path: '/dashboard', icon: LayoutDashboard},
    {title: 'analytics', path: '/dashboard/analytics', icon: BarChartBig},
    {title: 'orders', path: '/dashboard/orders', icon: ShoppingCart},
    {title: 'blog', path: '/dashboard/blog', icon: NotebookText},
    {title: 'notifications', path: '/dashboard/notifications', icon: Bell },
    {title: 'mails', path: '/dashboard/mails', icon: Mails },
]

export default Links;