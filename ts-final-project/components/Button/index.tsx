'use client';
interface IButtonProps {
  customclassName: string;
  text: string;
  children: React.ReactNode;
}

export default function Button({
  customclassName = '',
  text = '',
  children = <></>,
}: IButtonProps) {
  return (
    <button className={customclassName}>
      {text}
      {children}
    </button>
  );
}
