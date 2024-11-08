'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function AddMemberForm({ onSave, onCancel, includePosition = true }) {
  const [newContact, setNewContact] = useState({
    name: '',
    position: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewContact((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      // Simply converting the file after has been read into a data URL format,  which can be used to display the file as an image in the client.
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newContact.name && newContact.email && newContact.phone && newContact.gender
    onSave(newContact);
    setNewContact({
      name: '',
      position: '',
      image: null,
    });
    setImagePreview(null);

  };

  return (
    <div className="flex bg-bgColor dark:bg-darkBg transition-colors duration-100">
      <div className="w-full p-6 bg-white dark:bg-SecDarkBg transition-colors duration-300 shadow-md rounded-lg text-black dark:text-darkText">

        <div className="flex flex-col items-center mb-8">
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {imagePreview ? (
              <Image
                width={300}
                height={300}
                src={imagePreview}
                alt="Image Preview"
                className="w-56 h-56 object-cover rounded-full border p-2"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-[#ECECEE] dark:text-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>

              </div>
            )}
          </label>
          <span className="mt-4 opacity-70 dark:text-darkText">Upload Photo</span>
        </div>

        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 border rounded dark:border-slate-700 dark:bg-SecDarkBg"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4 ">
            {includePosition && (
              <input
                type="text"
                name="position"
                value={newContact.position}
                onChange={handleChange}
                placeholder="Position"
                className="w-full p-2 border dark:border-slate-700 rounded dark:bg-SecDarkBg "
              />
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue text-white px-6 py-3 rounded-lg"
            >
              Add Now
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="bg-[#ECECEE] dark:text-black px-6 py-3 rounded-lg ml-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}