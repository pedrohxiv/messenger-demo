'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Conversation, User } from '@prisma/client';
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2';

import { AvatarGroup } from '@/components/avatar-group';
import { Avatar } from '@/components/avatar';
import { useOtherUser } from '@/hooks/useOtherUser';
import { useActiveList } from '@/hooks/useActiveList';

import { ProfileDrawer } from './profile-drawer';

interface HeaderProps {
  conversation: Conversation & { users: User[] };
}

export function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? 'Active' : 'Offline';
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link
            className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
            href="/conversations"
          >
            <HiChevronLeft size={32} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}
          <div className="flex flex-col">
            <div className="">{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">{statusText}</div>
          </div>
        </div>
        <HiEllipsisHorizontal
          className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
          size={32}
          onClick={() => setDrawerOpen(true)}
        />
      </div>
    </>
  );
}
