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
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Delay hiding the modal to allow the transition to complete
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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

  return isVisible ? (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md mx-4 shadow-xl transform transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
          {mode === 'create' ? 'Create New User' : 'Update User'}
        </h2>
        {/* Form fields */}
        <div className="space-y-4">
          <div>
            <Input
              name="name"
              value={(formData as any)?.name || ''}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <Input
              name="email"
              value={(formData as any)?.email || ''}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          {/* Add more fields as required */}
        </div>

        {/* Action buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <Button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            {mode === 'create' ? 'Create' : 'Update'}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserModalForm;
