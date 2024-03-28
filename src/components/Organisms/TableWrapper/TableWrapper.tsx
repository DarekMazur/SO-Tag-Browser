import TableHeader from '../../Molecules/TableHeader/TableHeader.tsx';
import TableProvider from '../../../providers/TableProvider.tsx';
import TableContent from '../TableContent/TableContent.tsx';
import { ITableHeader } from '../../../types/types.ts';

const TableWrapper = () => {
  const headers: ITableHeader[] = [
    {
      label: '',
      name: 'order',
      isSortable: false,
    },
    {
      label: 'Tag',
      name: 'name',
      isSortable: true,
    },
    {
      label: 'Posts count',
      name: 'count',
      isSortable: true,
    },
    {
      label: '',
      name: 'link',
      isSortable: false,
    },
  ];

  return (
    <TableProvider>
      <TableHeader headers={headers} />
      <TableContent />
    </TableProvider>
  );
};

export default TableWrapper;
