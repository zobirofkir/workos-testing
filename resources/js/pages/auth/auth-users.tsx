import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
];

const AuthUser = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Users" />

      <div className="space-y-6 p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold dark:text-gray-100 text-gray-800">User List</h2>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-lg">
          <Table className="min-w-full table-auto">
            <TableHeader className="dark:bg-gray-800 bg-gray-200">
              <TableRow>
                <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Name</TableHead>
                <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Email</TableHead>
                <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-t">
                  <TableCell className="py-4 px-6 text-sm font-medium dark:text-white text-black">{user.name}</TableCell>
                  <TableCell className="py-4 px-6 text-sm dark:text-white text-black">{user.email}</TableCell>
                  <TableCell className="py-4 px-6 text-sm dark:text-white text-black">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
};

export default AuthUser;
