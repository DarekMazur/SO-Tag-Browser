import { useTranslation } from 'react-i18next';
import TableHeader from '../../Molecules/TableHeader/TableHeader.tsx';
import TableProvider from '../../../providers/TableProvider.tsx';
import TableContent from '../TableContent/TableContent.tsx';
import { ITableHeader } from '../../../types/types.ts';
import { useGetTagsQuery } from '../../../store';
import LoadingStatus from '../../Molecules/LoadingStatus/LoadingStatus.tsx';

const TableWrapper = () => {
  const { t } = useTranslation();
  const headers: ITableHeader[] = [
    {
      label: '',
      name: 'order',
      isSortable: false,
    },
    {
      label: t('table.header.tag'),
      name: 'name',
      isSortable: true,
    },
    {
      label: t('table.header.count'),
      name: 'count',
      isSortable: true,
    },
    {
      label: '',
      name: 'link',
      isSortable: false,
    },
  ];

  const { data: tags, isLoading, error } = useGetTagsQuery();

  return (
    <>
      {error ? (
        <LoadingStatus status="error" />
      ) : isLoading && !tags ? (
        <LoadingStatus status="loading" />
      ) : (
        <TableProvider>
          <TableHeader headers={headers} />
          <TableContent />
        </TableProvider>
      )}
    </>
  );
};

export default TableWrapper;
