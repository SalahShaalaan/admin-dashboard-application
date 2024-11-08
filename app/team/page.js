'use client'
import { useState } from 'react';
import AddMemberForm from '../_components/AddMemberForm';
import MemberCard from './MemberCard';
import memberImg from "@/public/team.png"

export default function Page() {
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [members, setMembers] = useState([
    {
      id: 1,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "Admin",
    },
    {
      id: 2,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "CEO",
    },
    {
      id: 3,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "Lead",
    },
    {
      id: 4,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "Developer",
    },
    {
      id: 5,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "Designer",
    },
    {
      id: 6,
      image: memberImg,
      name: "John Doe",
      email: "placeholdermail@example.com",
      position: "Digital Marketer",
    },
    {
      id: 7,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "Sales Manager",
    },
    {
      id: 8,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "Strategist",
    },
    {
      id: 9,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "CTO",
    },
    {
      id: 10,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "Strategist",
    },
    {
      id: 11,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "Strategist",
    },
    {
      id: 12,
      image: memberImg,
      name: "Jane Doe",
      email: "placeholdermail@example.com",
      position: "Strategist",
    },
  ])

  const handleOpenForm = () => setIsAddingMember(true);
  const handleCloseForm = () => setIsAddingMember(false);

  const handleSaveMember = (newMember) => {
    const imageUrl = URL.createObjectURL(newMember.image);
    setMembers((prev) => [
      ...prev,
      { id: prev.length + 1, ...newMember, image: imageUrl }
    ]);
    handleCloseForm();
  };

  return (
    <div className="p-4 bg-bgColor dark:bg-darkBg">
      {!isAddingMember ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Teams</h1>
            <button onClick={handleOpenForm} className="bg-blue text-white px-4 py-3 text-lg font-semibold rounded-lg">Add New Member</button>
          </div>
          <div className="grid grid-cols-auto-fit-250 gap-20 mt-8">
            {members.map(member => (
              <MemberCard key={member.id} name={member.name} email={member.email} position={member.position} image={member.image} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-8">Add Team Member</h1>
          <AddMemberForm onSave={handleSaveMember} onCancel={handleCloseForm} />
        </>
      )}
    </div>
  );
}