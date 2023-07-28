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
      <main className="px-6 py-12 lg:px-8">{children}</main>
    </div>
  );
}
