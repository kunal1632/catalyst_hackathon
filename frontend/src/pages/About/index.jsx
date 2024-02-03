import React from 'react'
import Sidebar from '../../components/Sidebar'

export const About = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-10">
      <h1 className="text-3xl font-bold mb-5">About Us</h1>
      <p className="mb-5">
          Welcome to SkillSwapHub, the community-driven platform where individuals come together to share and acquire skills. Our mission is to create a vibrant learning environment where knowledge knows no bounds.
        </p>
        <p className="mb-5">
          At SkillSwapHub, we believe in the power of collaborative learning. Our platform allows users to seamlessly exchange skills, document their learning journeys, and connect with like-minded individuals from around the globe.
        </p>
        <p className="mb-5">
          Whether you're a coding enthusiast, a design maven, or someone eager to explore new domains, SkillSwapHub provides a space for you to thrive. Join our community, embark on learning adventures, and let's grow together!
        </p>
        <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
        <p className="mb-5">
          Empowering individuals through knowledge-sharing, fostering a culture of continuous learning, and building a global community where everyone has the opportunity to teach and learn.
        </p>
        <h2 className="text-2xl font-bold mb-3">Get Involved</h2>
        <p>
          Ready to embark on a journey of skill exchange and discovery? Join SkillSwapHub today and become a part of our ever-growing community.
        </p>
      </div>
    </div>
  )
}
