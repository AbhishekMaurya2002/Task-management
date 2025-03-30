import { GrTask } from "react-icons/gr";
import { MdDashboard, MdOutlineTaskAlt, MdAddTask, MdPendingActions, MdCloudDone, MdOutlineAccessTimeFilled, MdQueryStats } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-green-700 to-green-500 min-h-screen w-[4rem] sm:w-[14rem] flex flex-col gap-4 roboto-regular shadow-lg">
            {/* Header */}
            <div className="flex items-center gap-2 justify-center h-16 text-white text-xl font-bold mt-6">
                <GrTask />
                <span className="sm:block hidden text-sm">Task Manager</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
                <ul className="py-4 flex flex-col space-y-1">
                    {[
                        { to: '/', icon: <MdDashboard />, label: 'Dashboard' },
                        { to: '/addTask', icon: <MdAddTask />, label: 'Add Task' },
                        { to: '/deferredTask', icon: <MdOutlineAccessTimeFilled />, label: 'Deferred' },
                        { to: '/pendingTask', icon: <MdPendingActions />, label: 'Pending' },
                        { to: '/deployedTask', icon: <MdCloudDone />, label: 'Deployed' },
                        { to: '/completeTask', icon: <MdOutlineTaskAlt />, label: 'Completed' },
                        { to: '/inProgressTask', icon: <GrInProgress />, label: 'In Progress' },
                        { to: '/statsTask', icon: <MdQueryStats />, label: 'Stats' }
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
