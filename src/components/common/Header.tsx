import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = async () => {
    await router.push('/');
  };

  return (
    <div className="flex size-full h-12 shrink-0 items-center border border-gray-300 bg-white px-3">
      <div onClick={handleLogoClick} className="hover:cursor-pointer">
        <img src={'/logo.png'} className="h-9" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
