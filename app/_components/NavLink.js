"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? 'bg-blue text-white' : ''} ${className}`}>
      {children}
    </Link>
  );
}