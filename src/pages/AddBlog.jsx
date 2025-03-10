import React, { useState } from "react";

const AddBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newBlog = {
      id: Date.now(),
      title,
      image,
      shortDescription,
      fullDescription,
    };
    
    onAddBlog(newBlog);
    
    setTitle("");
    setImage(null);
    setShortDescription("");
    setFullDescription("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-teal-400 text-center">Add New Blog</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white mb-4"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 rounded bg-gray-700 text-white mb-4"
            required
          />
          <textarea
            placeholder="Short Description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white mb-4"
            required
          ></textarea>
          <textarea
            placeholder="Full Description"
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            className="w-full p-3 rounded bg-gray-700 text-white mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-500 p-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300"
          >
            Add Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
