/**
 * These are styles that are injected globally throughout the app
 */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html,
  body,
  #root {
    height: 100%;
    background-color: #13234c;
  }

  html {
    font-size: 62.5%;
    overflow-y: auto;
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.4;
    color: #181933;
    background: white;
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }

  a {
    text-decoration: none;
    background-color: transparent;
    transition: all .15s ease;
    cursor: pointer;
    color: #3c40c6;
    &:visited,
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  p {
    margin: 2rem 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    &:after {
      display: block;
      clear: both;
      content: '';
    }
    li {
      margin: 0;
      padding: 0;
    }
  }

  .ReactTable .rt-thead .rt-th {    padding: .7rem .5rem !important;  }  
  .ReactTable .rt-td {    padding: 1.2rem .5rem 0 .5rem !important;    line-height: 1;  }  
  .ReactTable .rt-td:first-child {    padding: 1.2rem .5rem 0 1rem !important;  }  
  .ReactTable .rt-td:last-child {    padding: .6rem .5rem .6rem .5rem !important;  }  
  .ReactTable .rt-thead .rt-th.-sort-desc, .ReactTable .rt-thead .rt-td.-sort-desc {    box-shadow: inset 0 -3px 0 0 #25CCF7 !important;  }

`;
