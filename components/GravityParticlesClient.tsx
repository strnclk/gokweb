'use client';

import dynamic from 'next/dynamic';

const GravityParticles = dynamic(() => import("@/components/GravityParticles").then(mod => mod.default), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gray-900" />
});

export default GravityParticles;
