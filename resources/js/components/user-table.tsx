import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const UserTable = ({ users }: { users: { id: number; name: string; email: string; role: string }[] }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <Table className="min-w-full table-auto">
        <TableHeader className="dark:bg-gray-800 bg-gray-200">
          <TableRow>
            <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Name</TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Email</TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Role</TableHead>
            <TableHead className="py-3 px-6 text-left text-sm font-medium dark:text-white text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-t">
              <TableCell className="py-4 px-6 text-sm font-medium dark:text-white text-black">{user.name}</TableCell>
              <TableCell className="py-4 px-6 text-sm dark:text-white text-black">{user.email}</TableCell>
              <TableCell className="py-4 px-6 text-sm dark:text-white text-black">{user.role}</TableCell>
              <TableCell className="py-4 px-6 text-sm dark:text-white text-black">
                <button
                  onClick={() => console.log(`Update user ${user.id}`)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => console.log(`Delete user ${user.id}`)}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
