import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stats from '../components/Stats';
import InfoCard from '../components/InfoCard';
import { HeartIcon, UsersIcon, GiftIcon } from '@heroicons/react/24/solid';
import CauseCard from '../components/CauseCard';
import GalleryImage from '../components/GalleryImage';
import causeImg1 from '../assets/dog1.jpeg';
import causeImg2 from '../assets/dog2.jpeg';
import gallery1 from '../assets/dog3.jpeg';
import gallery2 from '../assets/dog4.jpeg';
import gallery3 from '../assets/dog5.jpeg';

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-300 py-20 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Feed Hope. Nourish Lives.
        </h1>
        <p className="text-lg text-green-900">
          Join us in our mission to serve food, love and dignity to those who
          need it most.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded-full">
          Donate Now
        </button>
      </section>

      {/* Stats */}
      <Stats />

      {/* === Causes Section === */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Causes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CauseCard
            image={causeImg1}
            title="Feed Children"
            description="Help us provide nutritious meals to underprivileged kids."
          />
          <CauseCard
            image={causeImg2}
            title="Feed Street Animals"
            description="Support our daily feeding drives for stray animals."
          />
          <CauseCard
            image={causeImg1}
            title="Support Elderly"
            description="Deliver cooked food to elderly people who live alone."
          />
        </div>
      </section>

      {/* === Gallery Section === */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Gallery
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <GalleryImage src={gallery1} />
          <GalleryImage src={gallery2} />
          <GalleryImage src={gallery3} />
        </div>
      </section>

      {/* === What We Do Section === */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon={<HeartIcon className="w-10 h-10 mx-auto" />}
            title="Feed the Hungry"
            text="We provide healthy meals to underprivileged children and elderly."
          />
          <InfoCard
            icon={<UsersIcon className="w-10 h-10 mx-auto" />}
            title="Support Communities"
            text="We reach out to local communities and offer support services."
          />
          <InfoCard
            icon={<GiftIcon className="w-10 h-10 mx-auto" />}
            title="Animal Welfare"
            text="Feeding and caring for street animals every single day."
          />
        </div>
      </section>

      {/* === How You Can Help Section === */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          How You Can Help
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            icon="👐"
            title="Volunteer"
            text="Join us in our efforts to make the world better for humans and animals."
          />
          <InfoCard
            icon="💳"
            title="Donate"
            text="Contribute any amount to help fund meals, medicines, and shelters."
          />
          <InfoCard
            icon="📣"
            title="Spread Awareness"
            text="Share our mission with others and bring more people to support the cause."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Every rupee you donate feeds a soul.
        </h2>
        <p className="text-gray-600 mb-6">
          Your support brings food and dignity to underserved communities.
        </p>
        <button className="px-6 py-2 bg-green-600 text-white rounded-full">
          Support a Cause
        </button>
      </section>

      <Footer />
    </div>
  );
}
