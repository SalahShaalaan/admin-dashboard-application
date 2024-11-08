import Image from "next/image";
export default function MemberCard({ name, email, position, image }) {
  return (
    <div className="rounded-lg flex flex-col items-center bg-white dark:bg-SecDarkBg transition-colors duration-100 border dark:border-none">
      <div className="w-full flex flex-col items-center p-6">
        <Image src={image} alt="Pesron" width={150} height={150} quality={100} priority className=" w-60 h-60 rounded-full" />
        <div className=" p-6 text[#202224] rounded-md text-center">
          <h2 className="text-lg font-semibold text-center">{name}</h2>
          <span className="opacity-60 mt-4">{position}</span>
          <p className="text-center opacity-60 mt-6">{email}</p>
        </div>
      </div>


    </div>
  );
}