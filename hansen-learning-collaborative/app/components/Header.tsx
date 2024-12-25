'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <header className="bg-sage">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 py-12">
          <div className="flex items-center">
            <Image src="/hlc_logo_svg.svg" alt="Hanse Learning Collaborative logo" width={200} height={200} />
            <h1 className="lg:text-4xl md:text-3xl font-medium text-gray-800">
              Hansen Learning Collaborative
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'home'
                ? 'bg-sage_dark text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'blog'
                ? 'bg-sage_dark text-gray-900'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
              onClick={() => setActiveTab('blog')}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>)
}

export default Header;