import Image from "next/image";

export default function ContactCard({ name, email, image }) {

  return (
    <div className="rounded-lg flex flex-col items-center bg-white dark:bg-SecDarkBg transition-colors duration-100 border dark:border-none overflow-hidden">
      <div className="w-full">
        <Image src={image} alt="Pesron" width={400} height={400} quality={100} className="rounded-t-lg w-auto h-auto" />
        <div className=" p-6 text-black dark:text-darkText rounded-md">
          <h2 className="text-lg font-semibold text-center">{name}</h2>
          <p className="text-center opacity-60">{email}</p>
          <div className="flex justify-center mt-6 text-black font-semibold">
            <button disabled className="border px-6 py-3 rounded flex text-base tracking-wide opacity-60 dark:text-darkText">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}