import { getConversations } from '@/actions/getConversations';
import { Sidebar } from '@/components/sidebar';

import { ConversationList } from './components/conversation-list';

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
