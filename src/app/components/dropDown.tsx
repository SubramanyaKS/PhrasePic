'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface DropdownProps {
  options: { label: string; href: string; onClick?: () => void }[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="text-pink-300 hover:text-gray-300">
        {label}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1 z-20">
          {options.map((option, index) => (
            <Link className="block px-4 py-2 text-sm text-pink-300 hover:bg-gray-100" key={index} href={option.href} onClick={option.onClick}>
                {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
