import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="px-4 py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 md:mb-8">Contact Information</h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">123 Street Name</p>
                  <p className="text-gray-600">City, Country</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-phone text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-blue-600 text-xl mt-1"></i>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;