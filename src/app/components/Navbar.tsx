'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Teens', href: '/teens' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='mb-8 border-b'>
      <div className='mx-auto flex max-w-2xl items-center justify-between sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'>
            Next <span className='text-primary'>Ecommerce</span>
          </h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-primary'
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className='text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
