/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent, useState } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';

import {
  $bgLight,
  $black,
  $blue,
  $grey2,
  $grey4,
  $white,
  $white2,
} from 'constants/colors';
import FiltersTypo from 'pages/Tickets/CustomTypographies/FiltersTypo';
import sort from 'assets/table/sort.png';
import filter from 'assets/table/filter.png';
import ContactsModal from 'pages/Contacts/ContactsModal/ContactsModal';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import { stringAvatar } from 'utils/navbarHelpers';

const BlackTypo = styled(Typography)({
  fontWeight: 600,
  letterSpacing: '0.2px',
  color: `${$black}`,
});

interface Column {
  id: 'name' | 'email' | 'address' | 'createdAt';
  label: string;
  minWidth?: number;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 396 },
  { id: 'email', label: 'Email', minWidth: 248 },
  { id: 'address', label: 'Address', minWidth: 248 },
  { id: 'createdAt', label: 'Created at', minWidth: 225 },
];

export const TitleTypo = styled(Typography)({
  lineHeight: '18px',
  letterSpacing: '0.2px',
  color: `${$grey2}`,
  fontWeight: 700,
});

const Contacts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.contacts.list);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openModal = () => {
    dispatch(toggleContactModal());
  };

  return (
    <>
      <ContactsModal />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: '30px',
          width: '100%',
          minHeight: 'calc(100vh - 93px)',
          backgroundColor: `${$bgLight}`,
        }}
      >
        <Paper
          sx={{
            height: 'max-content',
            maxWidth: '1122px',
            bgColor: `${$white}`,
            border: `1px solid ${$white2}`,
            borderRadius: '8px',
          }}
        >
          <TableContainer>
            <Table
              sx={{
                '& .MuiTableRow-hover:hover': {
                  backgroundColor: 'rgba(55, 81, 255, 0.04)',
                },
              }}
            >
              <TableHead>
                <TableRow sx={{ height: '134px' }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        paddingLeft: '30px',
                      }}
                    >
                      {column.id === 'createdAt' && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '90px',
                          }}
                        >
                          <Box
                            component="button"
                            sx={{
                              fontSize: '14px',
                              fontWeight: 600,
                              letterSpacing: '0.2px',
                              color: `${$blue}`,
                              backgroundColor: 'transparent',
                            }}
                            onClick={openModal}
                          >
                            + Add contact
                          </Box>
                          <TitleTypo>{column.label}</TitleTypo>
                        </Box>
                      )}
                      {column.id === 'name' && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            width: '100%',
                            height: '90px',
                          }}
                        >
                          <Box>
                            <IconButton sx={{ mr: '32px' }}>
                              <img src={sort} alt="sort" />
                              <FiltersTypo>Sort</FiltersTypo>
                            </IconButton>
                            <IconButton>
                              <img src={filter} alt="filter" />
                              <FiltersTypo>Filter</FiltersTypo>
                            </IconButton>
                          </Box>
                          <TitleTypo>{column.label}</TitleTypo>
                        </Box>
                      )}
                      {(column.id === 'address' || column.id === 'email') && (
                        <TitleTypo sx={{ position: 'relative', top: '35px' }}>
                          {column.label}
                        </TitleTypo>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                      sx={{
                        position: 'relative',
                        top: 0,
                      }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align="left"
                            sx={{ height: '92px', pl: '30px', pr: 0 }}
                          >
                            {column.id === 'name' ? (
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                {row.src ? (
                                  <img src={row.src} alt={row.name} />
                                ) : (
                                  <Avatar {...stringAvatar(row.name)} />
                                )}
                                <BlackTypo sx={{ ml: '24px' }}>
                                  {value}
                                </BlackTypo>
                              </Box>
                            ) : (
                              <BlackTypo
                                sx={{
                                  fontWeight:
                                    column.id === 'address' ? 400 : 600,
                                }}
                              >
                                {value}
                              </BlackTypo>
                            )}
                          </TableCell>
                        );
                      })}
                      <IconButton
                        size="large"
                        aria-label="display more actions"
                        edge="end"
                        sx={{
                          mt: 'auto',
                          mb: 'auto',
                          color: `${$grey4}`,
                          position: 'absolute',
                          right: '35px',
                          top: '23px',
                        }}
                      >
                        <MoreIcon />
                      </IconButton>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[8, 12, 16]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default Contacts;
