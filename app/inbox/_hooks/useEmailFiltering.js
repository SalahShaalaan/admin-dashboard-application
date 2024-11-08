import { useSelector } from 'react-redux';

const useEmailFiltering = (search, currentView) => {
  const { emails, starredMails, sentMails, draftedMails, spamMails, binMails, currentLabel } = useSelector(state => state.inbox);

  /*
    function to get emails based on the current view .
    View = Mails that's currenlty shows
    * I'm using this way instead of creating separete pages for each view .
  */
  const getEmailsForView = () => {
    const viewEmails = {
      inbox: emails,
      starred: starredMails,
      sent: sentMails,
      draft: draftedMails,
      spam: spamMails,
      bin: binMails,
    };

    return viewEmails[currentView] || emails; // Default inbox if no match
  };

  // Step 1: Get emails for the current view
  const emailsForView = getEmailsForView();

  // Step 2: Filter emails based on search query if provided
  const searchFilteredEmails = search
    ? emailsForView.filter(email =>
      email.sender.toLowerCase().includes(search.toLowerCase()) ||
      email.subject.toLowerCase().includes(search.toLowerCase())
    )
    : emailsForView;

  // Step 3: Filter emails by label
  const labelFilteredEmails = currentLabel !== 'all'
    ? searchFilteredEmails.filter(email => email.label === currentLabel)
    : searchFilteredEmails;

  // Step 4: Return filtered emails and total count
  return {
    filteredEmails: labelFilteredEmails,
    totalEmails: labelFilteredEmails.length,
  };
};

export default useEmailFiltering;
