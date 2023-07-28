'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { Conversation, User } from '@prisma/client';
import { HiChevronLeft, HiEllipsisHorizontal } from 'react-icons/hi2';

import { Avatar } from '@/components/avatar';
import { useOtherUser } from '@/hooks/useOtherUser';

interface HeaderProps {
  conversation: Conversation & { users: User[] };
}

export function Header({ conversation }: HeaderProps) {
  const otherUser = useOtherUser(conversation);

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return `Active`;
  }, [conversation]);

  return (
    <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <Link
          className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
          href="/conversations"
        >
          <HiChevronLeft size={32} />
        </Link>
        <Avatar user={otherUser} />
        <div className="flex flex-col">
          <div className="">{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500">{statusText}</div>
        </div>
      </div>
      <HiEllipsisHorizontal
        className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
        size={32}
        onClick={() => {}}
      />
    </div>
  );
}