/* eslint-disable react/jsx-props-no-spreading */
import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  ThemeProvider,
} from '@mui/material';

import ContactsModal from 'pages/Contacts/ContactsModal/ContactsModal';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { toggleContactModal } from 'redux/slices/modal/modal.slice';
import { stringAvatar } from 'utils/navbarHelpers';
import PopoverPopup from 'components/PopoverPopup/PopoverPopup';
import {
  deleteContact,
  setCurrentId,
  setCurrentContact,
  fetchContacts,
} from 'redux/slices/contacts/contacts.slice';
import FilterPopover from 'components/FilterPopover/FilterPopover';
import SortPopover from 'components/SortPopover/SortPopover';
import {
  AddContactBox,
  HeaderCellWrapper,
  NameCellWrapper,
  PopoversWrapper,
  PositionedRow,
  PositionedStyledTypo,
  rowTheme,
  StyledBlackTypo,
  StyledBox,
  StyledPaper,
  StyledTableCell,
} from 'pages/Contacts/styles';
import { BlackTypo, TitleTypo } from 'components/Typographies/Typographies';
import { sortingFilteredContacts } from 'utils/sortingFiltered';
import { ContactsColumn } from 'interfaces/interfaces';

const columns: readonly ContactsColumn[] = [
  { id: 'name', label: 'Name', minWidth: 396 },
  { id: 'email', label: 'Email', minWidth: 248 },
  { id: 'address', label: 'Address', minWidth: 248 },
  { id: 'createdAt', label: 'Created at', minWidth: 225 },
];

const Contacts = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.contacts.list);
  const { currentId, searchName, order } = useAppSelector(
    (state) => state.contacts,
  );
  const user = useAppSelector((state) =>
    currentId ? state.contacts.list.find((u) => u.id === currentId) : null,
  );

  const edit = (id: number | undefined) => {
    dispatch(setCurrentId(id));
    if (user && typeof user !== undefined) {
      dispatch(
        setCurrentContact({
          id: user.id,
          src: user.src,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1],
          email: user.email,
          address: user.address,
        }),
      );
      dispatch(setCurrentId(user.id));
      dispatch(toggleContactModal());
    }
  };

  const deleteLine = (id: number | undefined) => {
    dispatch(setCurrentId(id));
    if (user && typeof user !== undefined && currentId) {
      dispatch(deleteContact(currentId));
    }
  };
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
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchContacts());
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [data]);

  useEffect(() => {
    if (user)
      dispatch(
        setCurrentContact({
          id: user.id,
          src: user.src,
          firstName: user.name.split(' ')[0],
          lastName: user.name.split(' ')[1],
          email: user.email,
          address: user.address,
        }),
      );
  }, [currentId, dispatch]);

  return (
    <>
      <ContactsModal />
      <StyledBox>
        <StyledPaper>
          <>
            <ThemeProvider theme={rowTheme}>
              <TableContainer>
                <Table>
                  <>
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
                              <HeaderCellWrapper>
                                <AddContactBox
                                  component="button"
                                  onClick={openModal}
                                >
                                  + Add contact
                                </AddContactBox>
                                <TitleTypo>{column.label}</TitleTypo>
                              </HeaderCellWrapper>
                            )}
                            {column.id === 'name' && (
                              <HeaderCellWrapper>
                                <PopoversWrapper>
                                  <SortPopover />
                                  <FilterPopover />
                                </PopoversWrapper>
                                <TitleTypo>{column.label}</TitleTypo>
                              </HeaderCellWrapper>
                            )}
                            {(column.id === 'address' ||
                              column.id === 'email') && (
                              <PositionedStyledTypo>
                                {column.label}
                              </PositionedStyledTypo>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sortingFilteredContacts(searchName, order, data)
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                        )
                        .map((row) => (
                          <PositionedRow hover tabIndex={-1} key={row.id}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <StyledTableCell key={column.id} align="left">
                                  {column.id === 'name' ? (
                                    <NameCellWrapper>
                                      <>
                                        {row.src ? (
                                          <img src={row.src} alt={row.name} />
                                        ) : (
                                          <Avatar {...stringAvatar(row.name)} />
                                        )}
                                        <StyledBlackTypo>
                                          {value}
                                        </StyledBlackTypo>
                                      </>
                                    </NameCellWrapper>
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
                                </StyledTableCell>
                              );
                            })}
                            <PopoverPopup
                              edit={() => edit(row.id)}
                              deleteLine={() => deleteLine(row.id)}
                            />
                          </PositionedRow>
                        ))}
                    </TableBody>
                  </>
                </Table>
              </TableContainer>
            </ThemeProvider>
            <TablePagination
              rowsPerPageOptions={[8, 12, 16]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        </StyledPaper>
      </StyledBox>
    </>
  );
};

export default Contacts;
