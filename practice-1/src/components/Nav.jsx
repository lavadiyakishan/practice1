import { Link } from "react-router-dom";
const Nav = () => {
  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Apps",
      href: "/apps",
    },
    {
      label: "CRUD",
      href: "/crud",
    },
  ];
  return (
    <div>
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 48px ",
            boxShadow: "0 8px 8px 0 rgba(0 ,0 ,0 ,0.5)",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: 8 }}
            className=""
          >
            All practice
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                    fontSize: 17,
                    padding: "12px 24px",
                    borderRadius: 4,
                  }}
                  to={menu.href}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
