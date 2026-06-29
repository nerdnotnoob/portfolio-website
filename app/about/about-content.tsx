'use client';

import useThemeStore from '@/store/theme-control';
import SocialMedia from '../social-media';
import Image from 'next/image';

export const AboutContent = () => {
  const { theme } = useThemeStore();
  return (
    <section className="flex justify-center p-4 sm:p-8 lg:p-16">
      <div className="w-full max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Profile Picture Placeholder */}
          <div className="h-80 w-80 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
            <Image
              src={
                'https://res.cloudinary.com/dyx1sh27d/image/upload/v1782724969/the-bookunmie_y5vgyu.jpg'
              }
              alt="my picture"
              width={320}
              height={320}
            />
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div>
              <h1
                className={`mb-2 text-4xl font-bold sm:text-5xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
              >
                Rithwan Oyelude
              </h1>
              <p
                className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
              >
                Cinematographer, Director & Photographer
              </p>
            </div>

            <p
              className={`text-base leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} lg:text-lg`}
            >
              {`A Nigerian cinematographer, director and photographer specializing
              in commercials, documentaries, weddings and branded content. With
              over 10 years of experience, I've directed campaigns and visual
              stories for brands and personalities across Nigeria.`}
            </p>

            {/* Location */}
            <div
              className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}
            >
              <p
                className={`font-semibold ${theme === 'light' ? 'text-black' : 'text-white'}`}
              >
                📍 Location
              </p>
              <p>Nigeria</p>
            </div>

            <SocialMedia />
          </div>
        </div>

        {/* Details Section */}
        <div
          className={`space-y-8 border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'} pt-8`}
        >
          {/* Experience */}
          <div>
            <h2
              className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Experience
            </h2>
            <p
              className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
            >
              Over 10 years
            </p>
            <p
              className={theme === 'light' ? 'text-gray-600' : 'text-gray-400'}
            >
              Extensive experience in creating visual content across multiple
              mediums and industries.
            </p>
          </div>

          {/* Equipment */}
          <div>
            <h2
              className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Equipment
            </h2>
            <div
              className={`space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              <p
                className={`font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Professional Cinema Cameras
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Sony FX3</li>
                <li>Canon R8</li>
              </ul>

              <p
                className={`mt-4 font-semibold ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
              >
                Mirrorless & DSLR Cameras
              </p>
              <p className="ml-4">Full range of professional-grade equipment</p>
            </div>
          </div>

          {/* Software Proficiency */}
          <div>
            <h2
              className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Software Proficiency
            </h2>
            <ul
              className={`space-y-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              <li className="flex items-center gap-2">
                <span className="text-lg">•</span>
                <span>Adobe Premiere Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">•</span>
                <span>Adobe After Effects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">•</span>
                <span>Adobe Photoshop</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2
              className={`mb-4 text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              Get in Touch
            </h2>
            <p
              className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
              {`Ready to bring your vision to life? Let's create something amazing
              together.`}
            </p>
            <a
              href="/bookings"
              className={`inline-block rounded-lg px-6 py-3 font-semibold transition-all ${theme === 'light' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
