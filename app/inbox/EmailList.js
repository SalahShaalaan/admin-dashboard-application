import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InboxToolbar from './InboxToolbar';
import { toggleSelect, toggleStar } from './_redux/inboxSlice';
import EmailItem from './EmailItem';
import InboxFooter from './InboxFooter';
import useEmailFiltering from './_hooks/useEmailFiltering';

const EMAILS_PER_PAGE = 8;

export default function EmailList() {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { currentView, selectedEmailIds } = useSelector(state => state.inbox);
  const { filteredEmails, totalEmails } = useEmailFiltering(search, currentView);

  const currentEmails = useMemo(() => {
    const startIndex = (currentPage - 1) * EMAILS_PER_PAGE;
    return filteredEmails.slice(startIndex, startIndex + EMAILS_PER_PAGE);
  }, [filteredEmails, currentPage]);

  const handleCheckboxChange = (emailId) => dispatch(toggleSelect(emailId));
  const handleStarClick = (emailId) => dispatch(toggleStar(emailId));

  return (
    <div className="ml-6 mt-4 bg-white dark:bg-SecDarkBg md:p-4 p-0 border dark:border-none rounded-xl">
      <InboxToolbar search={search} setSearch={setSearch} />

      {currentEmails.length > 0 ? (
        <>
          {currentEmails.map((email) => (
            <EmailItem
              key={email.id}
              email={email}
              isSelected={selectedEmailIds.includes(email.id)}
              onCheckboxChange={handleCheckboxChange}
              onStarClick={handleStarClick}
            />
          ))}
          <InboxFooter
            currentPage={currentPage}
            totalPages={Math.ceil(filteredEmails.length / EMAILS_PER_PAGE)}
            onPageChange={setCurrentPage}
            totalEmails={totalEmails}
            emailsPerPage={EMAILS_PER_PAGE}
          />
        </>
      ) : (
        <p className="text-center mt-4">There are no {currentView} emails yet...</p>
      )}
    </div>
  );
};