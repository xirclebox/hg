export interface MenuItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const MenuItem = ({ href, onClick, children }: MenuItemProps) => {
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li>
      <a
        href={href}
        className="menu-item"
        onClick={handleClick}
        role="menuitem"
      >
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
