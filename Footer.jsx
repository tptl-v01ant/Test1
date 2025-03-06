import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', path: '/features' },
        { name: 'Integrations', path: '/integrations' },
        { name: 'Security', path: '/security' },
        { name: 'Enterprise', path: '/enterprise' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Guides', path: '/guides' },
        { name: 'Webinars', path: '/webinars' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
        { name: 'Partners', path: '/partners' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', path: '/privacy' },
        { name: 'Terms', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' }
      ]
    }
  ];

  return (
    <footer className="bg-lightGray py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">AI Genius Labs</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-xs">
              Create personalized product demos at scale with our AI-powered demo creation platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/aigeniuslabs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/aigeniuslabs" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {currentYear} AIGeniusLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
