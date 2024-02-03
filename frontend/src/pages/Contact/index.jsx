import React from 'react'
import Sidebar from '../../components/Sidebar'

export const Contact = () => {
  const teamMembers = [
    {
      name: 'Ayush Munot',
      email: 'ayushmunot921@gmail.com',
      linkedin: 'https://www.linkedin.com/in/royalboss/',
      github: 'https://github.com/RoyalBosS-Ayush',
    },
    {
      name: 'Kunal Dhand',
      email: 'kunal.dk35@gmail.com',
      linkedin: 'https://www.linkedin.com/in/kunaldhand/',
      github: 'https://github.com/kunal1632',
    },
    {
      name: 'Lakshay Tyagi',
      email: 'tyagilakshay119@gmail.com',
      linkedin: 'https://www.linkedin.com/in/imlakshay08/',
      github: 'https://github.com/imlakshay08/',
    },
    {
      name: 'Shashank Gulati',
      email: 'shashankgulati2405@gmail.com',
      linkedin: 'https://www.linkedin.com/in/shashank-gulati-1a262b213/',
      github: 'https://github.com/SHASHANK2405',
    },
  ];
  return (
    <div className="flex">
    <Sidebar />

    <div className="flex-grow p-10">
      <h1 className="text-3xl font-bold mb-5">Get in Touch with Us</h1>

      <p className="mb-8">
        We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, feel free to reach out to us. Connect with our team members individually or use the contact form below.
      </p>

      <div className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Meet Our Team :</h2>
          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p>Email: <a href={`mailto:${member.email}`} className="text-blue-600">{member.email}</a></p>
                <p>
                  LinkedIn: <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">{member.name}</a>
                </p>
                <p>
                  GitHub: <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-600">{member.name}</a>
                </p>
              </div>
            ))}
          </div>
        </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Contact Form</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="resize-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
            />
          </div>
          <button
            className="bg-purple hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
