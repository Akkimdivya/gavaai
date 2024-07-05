import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
     
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Airport Name</h1>
            <p className="text-lg">Book your flights with ease</p>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search for flights"
                className="w-full text-black px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white mt-2 px-6 py-3 ml-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Parking</h2>
              <p className="text-gray-700">Convenient parking options available.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Lounges</h2>
              <p className="text-gray-700">Relax in our exclusive lounges.</p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Dining</h2>
              <p className="text-gray-700">Explore a variety of dining options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 AKKIM DIVYA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
