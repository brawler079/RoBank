import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: "Abhi", lastName: "Brawl"};

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user = {loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
          src="/icons/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          />
          <div>
            <MobileNav user = {loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
