import TableHeader from '../../Molecules/TableHeader/TableHeader.tsx';
import TableProvider from '../../../providers/TableProvider.tsx';
import TableContent from '../TableContent/TableContent.tsx';

const TableWrapper = () => {
  const headers: string[] = ['', 'Tag', 'Posts count', ''];

  return (
    <TableProvider>
      <TableHeader headers={headers} />
      <TableContent />
    </TableProvider>
  );
};

export default TableWrapper;
