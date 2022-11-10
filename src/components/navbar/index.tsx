// import Logo from '../../public/tailwind-logo.svg';
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className='
      px-2 py-3 bg-green-100
      w-full rounded
      flex flex-row items-center align-middle justify-between
      
    '>
      <Logo />
      <Menu />
    </div>
  )
};


export default Navbar;


const Logo: React.FC = () => {
  return (
  <span className='
    p-2 bg-inherit
    text-blue-700 hover:text-blue-500 text-2xl font-bold
    flex flex-row align-middle items-center
    hover:cursor-pointer
  '>
    <LogoSVG /> Chat App
  </span>);
};




function LogoSVG(): JSX.Element{
  return (
    <svg
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className='fill-current text-inherit h-8 w-8 mr-2'
    >
      <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
    </svg>
  );
}


const Menu: React.FC = () => {
  return (<span className='
    flex flex-row
    pl-auto
  '>
    <MenuItem text={"+ Add Contact"} />
    <MenuItem text={"Groups"} />
    <MenuItem text={"Contacts"} />
    <MenuItem text={"Conversations"} />
    <MenuItem text={"Profile"} />
    <MenuItem text={"Sign Out"} />
  </span>)
}


interface MenuItemProps{
  text: string
}

const MenuItem = ({ text }: MenuItemProps) => {
  return (
    <Link href=''>
      <span className='
        px-2 py-1 rounded
        bg-inherit
        text-slate-700 hover:text-blue-700 font-bold text-lg
      '>
        {text}
      </span>
    </Link>
    
  );
}
