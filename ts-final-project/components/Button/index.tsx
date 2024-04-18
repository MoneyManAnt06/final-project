'use client';
import Link from 'next/link';

interface IButtonProps {
  customClass: string;
  text: string;
  children: React.ReactNode;
  href: string;
}

export default function Button({
  customClass = '',
  text = '',
  children = <></>,
  href = '',
}: IButtonProps) {
  return (
    <Link href={href} className={customClass}>
      {text}
      {children}
    </Link>
  );
}
