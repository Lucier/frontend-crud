import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`

export const Content = styled.div`
  float: right;

  button {
    font-size: 1rem;
    color: #fff;
    background: #000075;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    width: 100%;
    max-width: 360px;
    width: 300px;
    height: 72px;
    background: #33cc95;
    border-radius: 6px;
    text-decoration: none;
    color: #fff;
    justify-content: center;

    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 40px;
  }
`

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #e7e9ee;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`
