import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import UserTable from '@/components/user-table';
import Pagination from '@/components/pagination';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Users',
    href: '/users',
  },
];

const users = [
  { id: 1, name: 'Zobir Ofkir', email: 'zobir@example.com', role: 'Admin' },
  { id: 2, name: 'John Doe', email: 'john@example.com', role: 'User' },
  { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 4, name: 'Alex Turner', email: 'alex@example.com', role: 'Admin' },
  { id: 5, name: 'Emily Watson', email: 'emily@example.com', role: 'User' },
  { id: 6, name: 'Michael Johnson', email: 'michael@example.com', role: 'User' },
];

const AuthUser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Users" />

      <div className="space-y-6 p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold dark:text-gray-100 text-gray-800">User List</h2>

        {/* Buttons for Create, Update, Delete */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            onClick={() => console.log('Create new user')}
          >
            Create User
          </button>
        </div>

        {/* User Table */}
        <UserTable users={currentUsers} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
      </div>
    </AppLayout>
  );
};

export default AuthUser;
