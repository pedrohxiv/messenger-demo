import { getUsers } from '@/actions/getUsers';
import { Sidebar } from '@/components/sidebar';

import { UserList } from './components/user-list';

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
