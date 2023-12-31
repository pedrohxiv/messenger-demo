'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { CldUploadButton } from 'next-cloudinary';
import { User } from '@prisma/client';

import { Modal } from '@/components/modal';
import { Input } from '@/components/input';
import { Button } from '@/components/button';

interface SettingsModalProps {
  currentUser: User;
  isOpen?: boolean;
  onClose: () => void;
}

export function SettingsModal({ currentUser, isOpen, onClose }: SettingsModalProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch('image');

  function handleUpload(result: any) {
    setValue('image', result?.info?.secure_url, { shouldValidate: true });
  }

  function onSubmit(data: FieldValues) {
    setIsLoading(true);

    axios
      .post('/api/settings', data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(false));
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your public information
            </p>
            <div className="mt-10 flex flex-col gap-y-8">
              <Input
                disabled={isLoading}
                label="name"
                id="name"
                errors={errors}
                required
                register={register}
              />
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <div className="relative inline-block rounded-full overflow-hidden h-12 w-12">
                    <Image
                      src={image || currentUser?.image || '/placeholder.jpg'}
                      alt="Avatar"
                      fill
                      sizes="100vw 100vh"
                    />
                  </div>
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="w5qmmf7d"
                  >
                    <Button
                      disabled={isLoading}
                      secondary
                      type="button"
                    >
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Button
              disabled={isLoading}
              secondary
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              disabled={isLoading}
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
