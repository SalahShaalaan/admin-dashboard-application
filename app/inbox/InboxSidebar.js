import { useState } from "react";
import ComposeForm from "./Compose";
import { setView, setLabel } from "./_redux/inboxSlice";
import { useDispatch, useSelector } from "react-redux";

export default function InboxSidebar() {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const {
    emails,
    starredMails,
    sentMails,
    draftedMails,
    spamMails,
    binMails,
    currentView,
    currentLabel,
  } = useSelector(state => state.inbox);

  const sidebarLinks = [
    {
      title: "Inbox",
      view: "inbox",
      count: emails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    },
    {
      title: "Starred",
      view: "starred",
      count: starredMails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    },
    {
      title: "Sent",
      view: "sent",
      count: sentMails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    },
    {
      title: "Draft",
      view: "draft",
      count: draftedMails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
      </svg>
    },
    {
      title: "Spam",
      view: "spam",
      count: spamMails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    },
    {
      title: "Bin",
      view: "bin",
      count: binMails.length,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    }
  ];

  const sidebarLabels = ["Primary", "Social", "Work", "Friends"];
  const [isComposing, setIsComposing] = useState(false);

  const handleComposeClick = () => {
    setIsComposing(true);
  };

  const handleCloseForm = () => {
    setIsComposing(false);
  };

  const handleViewChange = (view) => {
    dispatch(setView(view));
  };

  const handleLabelChange = (label) => {
    dispatch(setLabel(label));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-2/4 left-0 z-50 p-4 bg-blue-500 text-white rounded-full transition-all duration-300 ${isOpen ? "left-[232px]" : "left-4"
          } md:hidden`}
      >
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
          </svg>

        }
      </button>
      {isComposing && <ComposeForm onClose={handleCloseForm} />}
      <aside className={`fixed p-4 rounded-lg md:relative md:min-h-screen bottom-0 left-0 w-64 bg-white dark:bg-SecDarkBg text-black dark:text-darkText transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}>
        <button className="w-full flex items-center justify-center bg-blue p-3 mb-4 rounded-xl text-white font-semibold" onClick={handleComposeClick}>+ Compose</button>
        <span className="font-semibold text-base opacity-70">My Email</span>
        <ul className="mt-4">
          {sidebarLinks.map(link => (
            <li key={link.title}
              className={`flex items-center justify-between p-3 font-semibold cursor-pointer rounded-lg ${currentView === link.view ? 'bg-[#e6eeff] dark:bg-[#2b3b5b] text-blue' : ''}`}
              onClick={() => handleViewChange(link.view)}>
              <div className="flex items-center gap-4">
                {link.icon}
                <span className="text-base font-semibold">{link.title}</span>
              </div>
              <span className=" text-blue rounded-full px-2 py-1 text-sm">{link.count}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-8 text-base">
          <span className="text-base font-semibold opacity-70">Labels</span>
          {sidebarLabels.map((label, index) => (
            <li key={index}
              className={`flex items-center gap-4 p-3 `} onClick={() => handleLabelChange(label)}>
              <input
                type="checkbox"
                id={label}
                className={`size-4 cursor-pointer accent-blue`}
                checked={currentLabel === label}
                onChange={() => handleLabelChange(label)}

              />
              <label htmlFor={label}>{label}</label>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}