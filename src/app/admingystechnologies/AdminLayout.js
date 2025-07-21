'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdMiscellaneousServices } from "react-icons/md";
import { MdDashboard } from 'react-icons/md';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaBriefcase,FaBars , FaUsers, FaCogs, FaSignOutAlt, FaClock } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiGalleryFill } from 'react-icons/ri';
import { BiTestTube } from 'react-icons/bi'; 

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('Token');
    router.push('/');
  };

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

useEffect(() => {
  const INACTIVITY_LIMIT = 10 * 60 * 1000; // 10 minutes in ms
  const CHECK_INTERVAL = 60 * 1000; // Check every 1 min

  const updateLastActivity = () => {
    sessionStorage.setItem('lastActivity', Date.now().toString());
  };

  const checkInactivity = () => {
    const lastActivity = parseInt(sessionStorage.getItem('lastActivity'), 10);
    if (Date.now() - lastActivity > INACTIVITY_LIMIT) {
      sessionStorage.removeItem('Token');
      sessionStorage.removeItem('lastActivity');
      router.push('/');
    }
  };

  // Update activity on events
  const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
  activityEvents.forEach(event =>
    window.addEventListener(event, updateLastActivity)
  );

  // Initialize last activity
  updateLastActivity();

  const interval = setInterval(checkInactivity, CHECK_INTERVAL);

  return () => {
    activityEvents.forEach(event =>
      window.removeEventListener(event, updateLastActivity)
    );
    clearInterval(interval);
  };
},[]);



const navItems = [
  {
    name: 'Dashboard',
    icon: <MdDashboard />,
    route: '/admingystechnologies/dashboard',
  },
  {
    name: 'Careers',
    icon: <FaBriefcase />,
    route: '/admingystechnologies/careers',
    subRoutes: [
      {
        name: 'Applications',
        route: '/admingystechnologies/careers/job-applications',
      },
      {
        name: 'Job List',
        route: '/admingystechnologies/careers/job-list',
      },
    ],
  },
  {
    name: 'Meetings',
    icon: <FaClock />,
    route: '/admingystechnologies/bookmeeting',
    subRoutes: [
      {
        name: 'Meeting Scheduled',
        route: '/admingystechnologies/bookmeeting/meeting-sheduled',
      },
      {
        name: 'Block Time',
        route: '/admingystechnologies/bookmeeting/block-time',
      },
    ],
  },
  {
    name: 'Testimonials',
    icon: <BiTestTube />,
    route: '/admingystechnologies/testimonials',
  },
  {
    name: 'Team Members',
    icon: <HiOutlineUserGroup />,
    route: '/admingystechnologies/our-team',
  },
  {
    name: 'Services & Technologies',
    icon: <MdMiscellaneousServices />,
    route: '/admingystechnologies/our-services',
  },
  {
    name: 'Gallery',
    icon: <RiGalleryFill />,
    route: '/admingystechnologies/gallery',
  },
  {
    name: 'Settings',
    icon: <FaCogs />,
    route: '/admingystechnologies/settings',
  },
  {
    name: 'Logout',
    icon: <FaSignOutAlt />,
    onClick: handleLogout,
  },
];


  return (
    <div className="flex h-screen relative z-10 overflow-hidden bg-gray-100 dark:bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`bg-gray-700 h-full mt-16 p-4 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'
          }`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white focus:outline-none mb-6"
        >
          <FaBars size={20} />
        </button>

        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = pathname.startsWith(item.route || '');
            const hasSubRoutes = item.subRoutes?.length > 0;
            const isOpen = openMenus[item.name];

            return (
              <li key={index}>
                {hasSubRoutes ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`flex items-center gap-3 w-full p-2 rounded-md hover:bg-purple-800 transition ${isActive ? 'bg-purple-800 font-bold' : ''
                        }`}
                    >
                      {item.icon}
                      {sidebarOpen && (
                        <>
                          <span className="text-sm font-medium flex-1 text-left">{item.name}</span>
                          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </>
                      )}
                    </button>

                    {/* Submenu */}
                    {isOpen && sidebarOpen && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {item.subRoutes.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={sub.route}
                              className={`block text-sm p-2 rounded-md hover:bg-purple-800 transition ${pathname === sub.route ? 'bg-purple-800 font-bold' : ''
                                }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-purple-800 transition"
                  >
                    {item.icon}
                    {sidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                  </button>
                ) : (
                  <Link
                    href={item.route}
                    className={`flex items-center gap-3 p-2 rounded-md hover:bg-purple-800 transition ${pathname === item.route ? 'bg-purple-800 font-bold' : ''
                      }`}
                  >
                    {item.icon}
                    {sidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default AdminLayout;
