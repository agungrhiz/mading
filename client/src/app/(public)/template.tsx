import Navbar from "@/components/molecules/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  const menu = [
    {
      key: "article",
      href: "/article",
      label: "Artikel",
    },
    {
      key: "login",
      href: "/login",
      label: "Settings",
    },
  ];

  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen">
      <Navbar menu={menu} />
      <main>{children}</main>
    </div>
  );
}
