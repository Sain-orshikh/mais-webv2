import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SidebarLink {
  label: { en: string; mn: string };
  href: string;
  id: string;
}

const sidebarLinks: SidebarLink[] = [
  { label: { en: 'Overview', mn: 'Ерөнхий мэдээлэл' }, href: '/student-life', id: 'overview' },
  { label: { en: 'Academic Clubs', mn: 'Академик клубууд' }, href: '/student-life/academic-clubs', id: 'academic-clubs' },
  { label: { en: 'Athletics', mn: 'Спорт' }, href: '/student-life/athletics', id: 'athletics' },
  { label: { en: 'Arts & Music', mn: 'Урлаг & Хөгжим' }, href: '/student-life/arts-music', id: 'arts-music' },
  { label: { en: 'Service Clubs', mn: 'Үйлчилгээний клубууд' }, href: '/student-life/service-clubs', id: 'service-clubs' },
  { label: { en: 'DOFE', mn: 'DOFE' }, href: '/student-life/dofe', id: 'dofe' },
  { label: { en: 'Events', mn: 'Үйл явдал' }, href: '/student-life/events', id: 'events' },
  { label: { en: 'News Archive', mn: 'Мэдээний архив' }, href: '/student-life/news-archive', id: 'news-archive' },
];

interface StudentLifeLayoutProps {
  children: ReactNode;
}

export function StudentLifeLayout({ children }: StudentLifeLayoutProps) {
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/student-life') return 'overview';
    return path.split('/').pop() || 'overview';
  };

  const activeSection = getActiveSection();

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="w-56 bg-white border-r border-gray-200 sticky top-20"
      >
        <div className="p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
            Categories
          </h3>
          <nav className="space-y-2">
            {sidebarLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === 'overview' && activeSection === 'student-life');
              return (
                <motion.div key={link.id} whileHover={{ x: 4 }}>
                  <Link
                    to={link.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-cardinal-red text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current"></span>
                    {link.label.en}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex-1"
      >
        {children}
      </motion.main>
    </div>
  );
}
