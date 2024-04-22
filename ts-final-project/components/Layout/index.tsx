import CustomHeader from '../CustomHeader';

export interface ILayout {
  children: React.ReactNode;
}

export default async function Layout({ children = <></> }) {
  return (
    <>
      <CustomHeader title="Your Store" />
      {children}
    </>
  );
}
