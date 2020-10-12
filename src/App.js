import React from 'react';
import Datatable from 'react-bs-datatable';
import { css } from 'emotion';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



function Component() {
  const header = [
    { title: 'Username', prop: 'username', filterable: true },
    { title: 'Name', prop: 'realname', filterable: true },
    { title: 'Location', prop: 'location', filterable: true }
  ];

  const body = Array.from(new Array(57), () => {
    const rd = (Math.random() * 10).toFixed(1);
    if (rd > 1.5) {
      return {
        username: 'Arun Kumar',
        realname: `Arun ${rd}`,
        location: 'Delhi'
      };
    }

    return {
      username: 'john-nhoj',
      realname: `John ${rd}`,
      location: 'Saturn'
    };
  });


  const onSortFunction = {
    date(columnValue) {
      return columnValue;
    }
  };

  const customLabels = {
    first: '<<',
    last: '>>',
    prev: '<',
    next: '>',
    show: 'Display',
    entries: 'rows',
    noResults: 'There is no data to be displayed'
  };

  const classes = {
    table: 'table-striped table-bordered table-responsive',
    theadCol: css`
    .table-datatable__root & {
      &.sortable:hover {
        background: pink;
      }
    }
  `,
    tbodyRow: css`
    &:nth-of-type(even) {
      background: #eaeaea;
    }
  `,
    paginationOptsFormText: css`
    &:first-of-type {
      margin-right: 8px;
    }
    &:last-of-type {
      margin-left: 8px;
    }
  `
  };

  return <>
    <p>This is table example</p>
    <div>
      <Datatable
        tableHeaders={header}
        tableBody={body}
        rowsPerPage={5}
        rowsPerPageOption={[5, 10, 15, 20]}
        initialSort={{ prop: 'username', isAscending: true }}
        onSort={onSortFunction}
        labels={customLabels}
        classes={classes}
      />
    </div>
  </>;

}
export default Component;