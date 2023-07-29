'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { useConversation } from '@/hooks/useConversation';
import { FullMessageType } from '@/types';

import { MessageBox } from './message-box';

interface BodyProps {
  initialMessages: FullMessageType[];
}

export function Body({ initialMessages }: BodyProps) {
  const [messages, setMessages] = useState(initialMessages);
  const buttonRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          key={message.id}
          isLast={index === messages.length - 1}
          data={message}
        />
      ))}
      <div
        ref={buttonRef}
        className="pt-24"
      />
    </div>
  );
}
