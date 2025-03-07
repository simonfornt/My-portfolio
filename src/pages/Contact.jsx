import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-teal-600 text-center">Contact Me</h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Message" className="w-full p-3 border rounded-md" rows="4"></textarea>
          <button className="w-full p-3 bg-teal-600 text-white rounded-md">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
