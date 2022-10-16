import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { IssuesColumn } from 'pages/Issues/types';
import { useAppSelector } from 'redux/hooks';
import { TableWrapper } from 'pages/Tickets/styles';
import { TitleTypo } from 'components/Typographies/Typographies';

const columns: readonly IssuesColumn[] = [
  { id: 'issueDetail', label: 'Issue details', minWidth: 280 },
  { id: 'priority', label: 'Priority', minWidth: 120 },
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'email', label: 'Email', minWidth: 150 },
  { id: 'address', label: 'Address', minWidth: 150 },
];

const Issues = () => {
  const list = useAppSelector((state) => state.wizard.list);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
      }}
    >
      <Link
        to="/step1"
        style={{
          width: 'max-content',
          height: 'max-content',
          paddingBottom: '30px',
        }}
      >
        <Button type="button" variant="contained">
          Add issue
        </Button>
      </Link>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  <TitleTypo>{column.label}</TitleTypo>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.length <= 1 && list[0].id === null
              ? 'There is no any issue yet.'
              : list.map((row) => (
                  <TableRow key={row.id} hover tabIndex={-1}>
                    {columns.map((column) => (
                      <TableCell key={column.id}>
                        {column.id === 'issueDetail' &&
                          row.issueDetail.join('\n')}
                        {column.id === 'priority' && row.priority.join('\n')}
                        {column.id === 'name' && row.name.join('\n')}
                        {column.id === 'email' && row.email.join('\n')}
                        {column.id === 'address' && row.address.join('\n')}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Box>
  );
};

export default Issues;
