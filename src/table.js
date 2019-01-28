import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import 'react-table/react-table.css';
import ReactTable from 'react-table';

import { FondContext } from './App';
import { Button } from './theme/theme';
import LoadingIcon from './images/audio.svg';

const Wrapper = styled.div`
  max-width: 101rem;
  margin: auto;
  background-color: white;
`;

const Loading = styled.div`
  background-image: url(${LoadingIcon});
  background-color: transparent;
  width: 5rem;
  height: 5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 5rem 5rem;
  content: '';
  margin: 29rem auto auto auto;
`;

function Table() {
  const { state, dispatch } = useContext(FondContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useFetch(state);
  }, [state]);

  async function useFetch(state) {
    setLoading(true);
    try {
      const data = await Promise.all(
        state.map(url =>
          fetch(
            `https://limitless-garden-26844.herokuapp.com/https://www.avanza.se/_mobile/market/fund/${
              url.id
            }`
          ).then(response => {
            console.log(response);
            return response.json();
          })
        )
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert('Hoppsan nåt gick fel, kan det vara så att du skrev fel ID?');
      dispatch({ type: 'restart' });
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <ReactTable
        data={data}
        showPagination={false}
        minRows={0}
        columns={[
          {
            Header: 'ID - Namn',
            id: 'ID',
            accessor: d => `${d.id} - ${d.name}`,
            width: 250,
          },
          {
            Header: 'Kategori',
            accessor: 'subCategory',
            width: 200,
          },
          {
            Header: 'Avgift',
            accessor: 'managementFee',
            width: 60,
          },
          {
            Header: '1M %',
            id: 'priceOneMonthAgo',
            width: 60,
            accessor: d => Number(d.changeSinceOneMonth),
          },
          {
            Header: '3M %',
            id: 'priceThreeMonthsAgo',
            width: 60,
            accessor: d => Number(d.changeSinceThreeMonths),
          },
          {
            Header: '6M %',
            id: 'priceSixMonthsAgo',
            width: 60,
            accessor: d => Number(d.changeSinceSixMonths),
          },
          {
            Header: '12M %',
            id: 'priceOneYearAgo',
            width: 60,
            accessor: d => Number(d.changeSinceOneYear),
          },
          {
            Header: 'Momentum (3, 6, 12)',
            id: 'momentum',
            width: 165,
            accessor: d =>
              Number(d.changeSinceThreeMonths) +
              Number(d.changeSinceSixMonths) +
              Number(d.changeSinceOneYear),
          },
          {
            Header: '',
            accessor: 'id',
            width: 90,
            Cell: row => (
              <Button smalldanger onClick={() => dispatch({ type: 'delete', payload: row.value })}>
                Ta bort
              </Button>
            ),
          },
        ]}
        defaultSorted={[
          {
            id: 'momentum',
            desc: true,
          },
        ]}
        className="-striped -highlight"
      />
    </Wrapper>
  );
}

export default React.memo(Table);
