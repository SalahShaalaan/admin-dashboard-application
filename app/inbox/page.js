'use client'
import { Provider } from "react-redux";
import EmailList from "./EmailList";
import InboxSidebar from "./InboxSidebar";
import store from "./_redux/store";

export default function Page() {

  return (
    <Provider store={store}>
      <div className="md:p-4 p-0  bg-bgColor dark:bg-darkBg transition-colors duration-100">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <div className="flex">
          <InboxSidebar />
          <div className="flex-1">
            <EmailList />
          </div>
        </div>
      </div>
    </Provider>
  );
}