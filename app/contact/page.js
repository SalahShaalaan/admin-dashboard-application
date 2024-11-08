'use client';
import { useState } from 'react';
import ContactCard from "./ContactCard";
import AddMemberForm from '../_components/AddMemberForm';
import vector from "@/public/vector.png"

export default function Page() {

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
    { id: 2, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
    { id: 3, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
    { id: 4, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
    { id: 5, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
    { id: 6, name: 'Placeholder', email: 'placeholdermail@mail.com', image: vector },
  ]);

  const [isAddingContact, setIsAddingContact] = useState(false);

  const handleOpenForm = () => setIsAddingContact(true);
  const handleCloseForm = () => setIsAddingContact(false);
  const handleSave = (contact) => {
    const imageUrl = URL.createObjectURL(contact.image);

    setContacts((prev) => [...prev, { id: prev.length + 1, ...contact, image: imageUrl }]);
    handleCloseForm();
  };

  return (
    <div className="md:p-4 p-0 rounded-lg bg-bgColor dark:bg-darkBg">
      {!isAddingContact ? (
        <>
          <div className="flex items-center justify-between md:flex-row flex-col md:space-y-0 space-y-5">
            <h1 className="text-3xl font-bold">Contact</h1>
            <button
              onClick={handleOpenForm}
              className="bg-blue text-white text-lg font-semibold px-6 py-3 rounded"
            >
              Add new contact
            </button>
          </div>
          <div className="mt-12 grid grid-cols-auto-fit-350 gap-25">
            {contacts.map(contact => (
              <ContactCard key={contact.id} name={contact.name} email={contact.email} image={contact.image} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8">Add New Contact</h1>

          <AddMemberForm
            onSave={handleSave}
            onCancel={handleCloseForm}
            includePosition={false}
          />
        </>
      )}
    </div>
  );
}