import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { composeEmail } from './_redux/inboxSlice';

export default function ComposeForm({ onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    sender: '',
    label: '',
    subject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmail = {
      id: Date.now(),
      sender: formData.sender,
      label: formData.label,
      subject: formData.subject,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      starred: false,
    };

    dispatch(composeEmail(newEmail));

    setFormData({ sender: '', label: '', subject: '', });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-SecDarkBg p-6 rounded-md shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Compose New Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Sender:</label>
            <input
              type="text"
              name="sender"
              value={formData.sender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-darkBg dark:border-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Label:</label>
            <input
              type="text"
              name="label"
              value={formData.label}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-darkBg dark:border-none"
              required
              placeholder='Primary, Social, Work, Friends'
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none dark:bg-darkBg dark:border-none"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#ECECEE] dark:text-black rounded-md"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue text-white rounded-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}