import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import UserModalForm from './forms/user-modal-form';

type TableComponentProps<T> = {
  data: T[];
  columns: { label: string; accessor: keyof T }[];
  actions?: (item: T) => React.ReactNode;
  onCreate?: (data: T) => void;
  onUpdate?: (data: T) => void;
};

const TableComponent = <T,>({ data, columns, actions, onCreate, onUpdate }: TableComponentProps<T>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'update' | null>(null);
  const [currentItem, setCurrentItem] = useState<T | null>(null);

  const openCreateModal = () => {
    setModalMode('create');
    setIsModalOpen(true);
    setCurrentItem(null);
  };

  const openUpdateModal = (item: T) => {
    setModalMode('update');
    setIsModalOpen(true);
    setCurrentItem(item);
  };

  const openDeleteModal = (item: T) => {
    console.log('deleted', item.id);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: T) => {
    if (modalMode === 'create' && onCreate) {
      onCreate(data);
    } else if (modalMode === 'update' && onUpdate) {
      onUpdate(data);
    }
    closeModal();
  };

  return (
    <div>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <Table className="min-w-full table-auto">
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.accessor} className="py-3 px-6 text-left text-sm font-medium text-black dark:text-white">
                  {column.label}
                </TableHead>
              ))}
              {actions && (
                <TableHead className="py-3 px-6 text-left text-sm font-medium text-black dark:text-white">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="border-t">
                {columns.map((column) => (
                  <TableCell key={column.accessor} className="py-4 px-6 text-sm text-black dark:text-white">
                    {item[column.accessor]}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell className="py-4 px-6 text-sm text-black dark:text-white">
                    {actions(item)}
                  </TableCell>
                )}
                <TableCell className="py-4 px-6 text-sm text-black dark:text-white">
                  <button onClick={openCreateModal} className="text-blue-500 hover:text-blue-700">Create</button>
                  <button onClick={() => openUpdateModal(item)} className="text-yellow-500 ml-4 hover:text-yellow-700">Update</button>
                  <button onClick={() => openDeleteModal(item)} className="text-red-500 ml-4 hover:text-red-700">Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add smooth transition to the modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <UserModalForm
          isOpen={isModalOpen}
          onClose={closeModal}
          mode={modalMode || 'create'}
          currentItem={currentItem}
          onSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
};

export default TableComponent;
