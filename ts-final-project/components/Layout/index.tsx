import CustomHeader from '../CustomHeader';

export interface ILayout {
  children: React.ReactNode;
  isSearchInput?: boolean;
}

export default async function Layout({
  children = <></>,
  isSearchInput = false,
}) {
  return (
    <>
      <CustomHeader isSearchInput={isSearchInput} title="Your Store" />
      {children}
    </>
  );
}
