import React from 'react';
// Import your projects component if needed
import OurWork from '@/components/projects/our_work';
import FeaturedProjects from '@/components/projects/featured_projects';
export default function ProjectsPage() {
  return (
    <main>
      <OurWork />
      <FeaturedProjects />
      {/* Add more content here */}
    </main>
  );
}