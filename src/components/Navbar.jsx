import { useState, useEffect } from 'react';
import { MdDashboard, MdGroup, MdSchedule, MdPeople, MdWork, MdSupport, MdSettings, MdMenu, MdClose } from 'react-icons/md';

const Sidebar = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const tablet = window.innerWidth < 1024;
      setIsTablet(tablet);
      setIsOpen(!tablet);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mainMenuItems = [
    { icon: <MdDashboard />, text: 'Dashboard' },
    { icon: <MdGroup />, text: 'Recruitment' },
    { icon: <MdSchedule />, text: 'Schedule' },
    { icon: <MdPeople />, text: 'Employee' },
    { icon: <MdWork />, text: 'Department' },
  ];

  const otherMenuItems = [
    { icon: <MdSupport />, text: 'Support' },
    { icon: <MdSettings />, text: 'Settings' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {isTablet && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 text-gray-400 hover:text-gray-600"
        >
          <MdMenu size={24} />
        </button>
      )}
      <nav
        className={`
          fixed top-0 left-0 h-[1194px] bg-gray-100 shadow-md transition-all duration-300
          ${isTablet
            ? isOpen ? 'w-[90px] pt-[40px]' : 'w-0 overflow-hidden'
            : 'w-64 p-5'
          }
        `}
      >
        <div className={`flex items-center justify-center mb-12 ${isTablet ? 'mx-auto' : 'mr-12'}`}>
          <img src="src/assets/Group 2770.png" alt="Vasitum Logo" className="w-8" />
          {!isTablet && <span className="text-2xl ml-2 font-bold text-blue-900">Vasitum</span>}
        </div>
        
        <div className="mb-8">
          {!isTablet && <h3 className="text-xs font-semibold text-gray-500 mb-4 px-3">MAIN MENU</h3>}
          <div className="flex flex-col space-y-1">
            {mainMenuItems.map((item, index) => (
              <NavItem key={index} icon={item.icon} text={item.text} isTablet={isTablet} />
            ))}
          </div>
        </div>

        <div>
          {!isTablet && <h3 className="text-xs font-semibold text-gray-500 mb-4 px-3">OTHER</h3>}
          <div className="flex flex-col space-y-1">
            {otherMenuItems.map((item, index) => (
              <NavItem key={index} icon={item.icon} text={item.text} isTablet={isTablet} />
            ))}
          </div>
        </div>

        {isTablet && isOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600"
          >
            <MdClose size={20} />
          </button>
        )}
      </nav>
    </>
  );
};

const NavItem = ({ icon, text, isTablet }) => (
  <div className={`
    flex items-center rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200
    ${isTablet ? 'justify-center p-2' : 'px-3 py-2'}
  `}>
    <span className={`text-xl hover:text-red-500 transition-colors duration-200 ${isTablet ? 'text-gray-500' : 'text-gray-500'}`}>{icon}</span>
    {!isTablet && <span className={`ml-3 hover:text-red-500 transition-colors duration-200`}>{text}</span>}
  </div>
);

export default Sidebar;