import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { clerkClient } from '@clerk/nextjs/server';

export const AssigneeSelect = async () => {
  const { data } = await (await clerkClient()).users.getUserList();

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder='Assign...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Suggestions</SelectLabel>
          {data.map((user) => (
            <SelectItem key={user.id} value={user.id}>
              {user.emailAddresses[0].emailAddress}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
