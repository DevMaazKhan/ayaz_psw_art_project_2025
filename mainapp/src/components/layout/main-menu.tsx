import Link from "next/link";
import MenuCloseButton from "./main-menu-close-btn";

const menuList = [
  {
    id: 1,
    name: "Artists",
  },
  {
    id: 2,
    name: "Exhibitions",
  },
  {
    id: 3,
    name: "Conversations",
  },
  {
    id: 4,
    name: "Shop",
  },
  {
    id: 5,
    name: "Timeline",
  },
  {
    id: 6,
    name: "Gallery",
  },
];

const socialMediaLinks = [
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/bandahaliarts/",
  },
  {
    id: 2,
    name: "Facebook",
    link: "https://www.facebook.com/p/Bandah-Ali-Arts-Beauty-Of-Sindh-100064722217667/",
  },
];

const MenuItem = (props: { id: number; name: string }) => {
  return (
    <div className="w-fit cursor-pointer group-hover/menu-list:text-primary/40 hover:text-primary transition-colors ease duration-100">
      {props.name}
    </div>
  );
};

const SocialItem = (props: { id: number; name: string; link: string }) => {
  return (
    <Link href={props.link} target="_blank">
      <div className="w-fit cursor-pointer hover:text-primary/40 transition-colors ease duration-100">
        {props.name}
      </div>
    </Link>
  );
};

const MainMenu = () => {
  return (
    <div className="transition-all ease duration-100 fixed top-0 left-0 w-screen h-screen bg-custom text-primary opacity-0 hidden group-[.menu-open]:opacity-100 group-[.menu-open]:block">
      <MenuCloseButton />

      <div className="p-16 animate-menu-fade-in">
        <div className="uppercase text-5xl font-bold leading-14 group/menu-list">
          {menuList.map((menu) => (
            <MenuItem key={menu.id} {...menu} />
          ))}
        </div>
        <div className="font-[montserrat] font-medium mt-6 text-sm">
          {socialMediaLinks.map((link) => (
            <SocialItem key={link.id} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
