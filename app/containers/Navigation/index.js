/*
 *
 * Navigation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import { Router, Route, Link } from 'react-router'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch } from 'react-axios'

export class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledNavigation>
        <Link className="navItem" to="/Home">Home</Link>
        <Link className="navItem" to="/Swoop">Swoop</Link>
      </StyledNavigation>
    );
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
   <Get url="/api/user?ID=12345">
        {(error, response, isLoading) => {
          console.log(response)
          if(error) {
            return (<div>Something bad happened: {error.message}</div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div>{response.data.message}</div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>


export default connect(null, mapDispatchToProps)(Navigation);


/// Styles
const StyledNavigation = styled.div`
  a {
    font-size:2em;
    margin:1rem;
  }
`