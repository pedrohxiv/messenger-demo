import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';

export async function getConversationById(conversationId: string) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.id) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationId,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error) {
    return null;
  }
}
