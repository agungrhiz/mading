import Divider from "@/components/atoms/divider";
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  const menu = [
    {
      key: "article",
      href: "/dashboard/article",
      label: "Artikel",
    },
    {
      key: "comment",
      href: "/dashboard/comment",
      label: "Komentar",
    },
  ];

  
  return (
    <>
      <header>
        <div className="navbar bg-base-200">
          <div className="flex-1">
            <label
              tabIndex={0}
              htmlFor="my-drawer-2"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <a className="btn btn-ghost normal-case text-xl">JeWePe</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-guest">Logout</button>
          </div>
        </div>
        <Divider />
      </header>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col px-6 py-12 lg:px-8">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {menu.map((item) => (
              <li key={item.key}>
                <Link href={item.href}>
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
