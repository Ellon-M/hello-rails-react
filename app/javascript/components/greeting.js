import React from 'react';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from './greetingsSlice';


export const Greeting = ({ csrfToken }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting(csrfToken));
  }, [dispatch, csrfToken]);

  const greeting = useSelector((state) => state?.greetings.greeting);

  let textStyles = {
    fontSize: '40px',
    fontWeight: '600'
  }

  return (
    <>
      <h1 style={textStyles}>{greeting}</h1>
    </>
  )
}

export default Greeting;