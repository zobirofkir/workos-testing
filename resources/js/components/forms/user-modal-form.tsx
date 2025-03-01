import { Button, Input } from '@headlessui/react';
import { useState, useEffect } from 'react';

type ModalFormProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  mode: 'create' | 'update';
  currentItem: T | null;
  onSubmit: (data: T) => void;
};

const UserModalForm = <T,>({ isOpen, onClose, mode, currentItem, onSubmit }: ModalFormProps<T>) => {
  const [formData, setFormData] = useState<T | null>(currentItem || ({} as T));

  useEffect(() => {
    setFormData(currentItem || ({} as T));
  }, [currentItem]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = () => {
    if (formData) {
      onSubmit(formData);
      onClose();
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {mode === 'create' ? 'Create New User' : 'Update User'}
        </h2>
        {/* Form fields */}
        <div className="mb-4">
          <Input
            name="name"
            value={(formData as any)?.name || ''}
            onChange={handleInputChange}
            placeholder="Name"
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        <div className="mb-4">
          <Input
            name="email"
            value={(formData as any)?.email || ''}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md"
          />
        </div>
        {/* Add more fields as required */}

        <div className="flex justify-end space-x-4">
          <Button variant="secondary" onClick={onClose} className="bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white">
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit} className="bg-blue-500 dark:bg-blue-700 text-white">
            {mode === 'create' ? 'Create' : 'Update'}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserModalForm;
