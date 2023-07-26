import { getCurrentUser } from '@/actions/getCurrentUser';
import { DesktopSidebar } from '@/components/desktop-sidebar';
import { MobileFooter } from '@/components/mobile-footer';

export async function Sidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}
