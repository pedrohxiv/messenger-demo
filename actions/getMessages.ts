import prisma from '@/libs/prismadb';

export async function getMessages(conversationId: string) {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'asc',
      },
      where: {
        conversationId,
      },
      include: {
        sender: true,
        seen: true,
      },
    });

    return messages;
  } catch (error) {
    return [];
  }
}
