'use client';

import Image from 'next/image';

import { Modal } from '@/components/modal';

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

export function ImageModal({ src, isOpen, onClose }: ImageModalProps) {
  if (!src) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-80 h-80">
        <Image
          src={src}
          alt="Image"
          fill
          sizes="100vw 100vh"
          className="object-cover"
        />
      </div>
    </Modal>
  );
}
