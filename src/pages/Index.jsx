import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [search, setSearch] = useState('');

  const { data: weapons, isLoading, error } = useQuery({
    queryKey: ['weapons', search],
    queryFn: async () => {
      const response = await fetch(`/api/weapons?search=${search}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DIM Analyzer</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search weapons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Type</Table.Head>
            <Table.Head>Power</Table.Head>
            <Table.Head>Element</Table.Head>
            <Table.Head>Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {weapons?.map((weapon) => (
            <Table.Row key={weapon.id}>
              <Table.Cell>{weapon.name}</Table.Cell>
              <Table.Cell>{weapon.type}</Table.Cell>
              <Table.Cell>{weapon.power}</Table.Cell>
              <Table.Cell>{weapon.element}</Table.Cell>
              <Table.Cell>
                <Button variant="outline" size="sm">Details</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Index;
