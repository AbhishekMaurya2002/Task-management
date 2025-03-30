import { Link } from "react-router-dom";
import { Home, PlusCircle, Clock, ListChecks, CheckCircle2, Activity, TrendingUp, Briefcase } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-green-700 to-green-500 min-h-screen w-[4rem] sm:w-[14rem] flex flex-col gap-4 roboto-regular shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 justify-center h-16 text-white text-xl font-bold mt-6">
                <Briefcase />
                <span className="sm:block hidden text-sm">Task Manager</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
                <ul className="py-4 flex flex-col space-y-1">
                    {[
                        { to: '/', icon: <Home />, label: 'Dashboard' },
                        { to: '/addTask', icon: <PlusCircle />, label: 'Add Task' },
                        // { to: '/deferredTask', icon: <Clock />, label: 'Deferred' },
                        { to: '/pendingTask', icon: <ListChecks />, label: 'Pending' },
                        { to: '/deployedTask', icon: <CheckCircle2 />, label: 'Deployed' },
                        { to: '/completeTask', icon: <Activity />, label: 'Completed' },
                        { to: '/inProgressTask', icon: <TrendingUp />, label: 'In Progress' },
                        { to: '/statsTask', icon: <Briefcase />, label: 'Stats' }
                    ].map(({ to, icon, label }, index) => (
                        <Link
                            key={index}
                            to={to}
                            className="px-4 py-3 flex items-center gap-2 text-md font-medium text-gray-200 transition-all duration-200 rounded-lg hover:bg-green-700 hover:text-white"
                        >
                            <span className="text-xl">{icon}</span>
                            <span className="sm:block hidden">{label}</span>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
