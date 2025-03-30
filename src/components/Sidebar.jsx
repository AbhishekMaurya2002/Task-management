import { GrTask } from "react-icons/gr";
import { MdDashboard, MdOutlineTaskAlt, MdAddTask, MdPendingActions, MdCloudDone, MdOutlineAccessTimeFilled, MdQueryStats } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-green-700 to-green-500 min-h-screen w-[5rem] sm:w-[19rem] flex flex-col gap-4 roboto-regular shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
                <GrTask />
                <span className="sm:block hidden">Task Manager</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
                <ul className="py-4 flex flex-col space-y-1">
                    {[
                        { to: '/', icon: <MdDashboard />, label: 'Dashboard' },
                        { to: '/completeTask', icon: <MdOutlineTaskAlt />, label: 'Completed Tasks' },
                        { to: '/pendingTask', icon: <MdPendingActions />, label: 'Pending Tasks' },
                        { to: '/inProgressTask', icon: <GrInProgress />, label: 'In Progress Tasks' },
                        { to: '/deployedTask', icon: <MdCloudDone />, label: 'Deployed Tasks' },
                        { to: '/deferredTask', icon: <MdOutlineAccessTimeFilled />, label: 'Deferred Tasks' },
                        { to: '/addTask', icon: <MdAddTask />, label: 'Add New Tasks' },
                        { to: '/statsTask', icon: <MdQueryStats />, label: 'Task Stats' }
                    ].map(({ to, icon, label }, index) => (
                        <Link
                            key={index}
                            to={to}
                            className="px-6 py-3 flex items-center gap-3 text-lg font-medium text-gray-200 transition-all duration-200 rounded-lg hover:bg-green-700 hover:text-white"
                        >
                            <span className="text-2xl">{icon}</span>
                            <span className="sm:block hidden">{label}</span>
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
