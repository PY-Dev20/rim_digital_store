import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/rimdigital',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/insta-7.png?',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/rimdigital',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/fb-8.png?',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/22246007635',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/wa-9.png?',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/rimdigital',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/linked-in-10.png?',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@rimdigital',
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/ac8a90f4-7aa0-4196-902e-e02017adac3a-grandpcd-com/assets/icons/youtube-11.png?',
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Brands', href: '/brands' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact Us', href: '/contact' },
];

const SocialIcon = ({ name, href, iconUrl }: { name: string; href: string; iconUrl: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
    <div
      className="h-8 w-8 bg-foreground transition-colors duration-300 ease-in-out hover:bg-primary"
      style={{
        maskImage: `url(${iconUrl})`,
        maskSize: '100% 100%',
        WebkitMaskImage: `url(${iconUrl})`,
        WebkitMaskSize: '100% 100%',
      }}
    />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-muted font-sans">
      <div className="bg-[#1a1a1a]">
        <div className="container mx-auto px-6 lg:px-16 pt-[60px] pb-10">
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-12 md:text-left">
            <div className="space-y-6 md:col-span-12 lg:col-span-5">
              <Link href="/" className="inline-block">
                 <img
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-1760985306646.JPG"
                    alt="RIM Digital Store Logo"
                    className="h-10 md:h-12"
                  />
              </Link>
              <div className="mx-auto md:mx-0">
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
                  Follow Us
                </h2>
                <div className="flex justify-center space-x-4 md:justify-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Image
                        src={link.iconUrl}
                        alt={link.name}
                        width={32}
                        height={32}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-2">
              <h2 className="mb-6 text-xl font-semibold text-white">Quick Links</h2>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-gray-300 transition-colors hover:text-white hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-5">
              <h2 className="mb-6 text-xl font-semibold text-white">Locate Us</h2>
              <p className="text-[15px] leading-relaxed text-gray-300">
                RIM Digital Store
                <br />
                Technology Solutions Center
                <br />
                Digital Commerce Hub
                <br />
                West Africa
              </p>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-white">
                    Support Mail
                  </h3>
                  <a
                    href="mailto:sales@rimds.com"
                    className="text-[15px] text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    sales@rimds.com
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-white">
                    Support Tel
                  </h3>
                  <a
                    href="tel:+22246007635"
                    className="text-[15px] text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    +222 46 00 76 35
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 lg:px-16 py-6">
            <p className="text-center text-[13px] leading-relaxed text-gray-400">
              © Copyright 2024 RIM Digital. All rights reserved | Powered by RIM Digital | This
              site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Terms of Service
              </a>{' '}
              apply |
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}