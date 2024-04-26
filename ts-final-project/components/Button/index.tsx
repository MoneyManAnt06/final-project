'use client';
interface IButtonProps {
  customClass: string;
  text: string;
  children?: React.ReactNode;
}

export default function Button({
  customClass = '',
  text = '',
  children = <></>,
}: IButtonProps) {
  return (
    <button className={customClass}>
      {text}
      {children}
    </button>
  );
}
