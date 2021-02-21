import styled from 'styled-components'

import React, { useState } from 'react';
import Head from 'next/head'
import Background from '../src/components/Background'
import Titles from '../src/components/Titles'
import Form from '../src/components/Form'
import ListOfArtists from '../src/components/ListOfArtists'
import './token'
import { token } from './token';

const defaultList = {
  "artists" : {
    "items" : [
      ""
    ]
  }
}; 

export default function Home() {

  const [names,setNames] = React.useState (defaultList);
  const [status,setStatus] = React.useState (false);

  function onChange (e) {
    e.preventDefault ();
    if(e.target.value) {
      fetchList(e.target.value);
    }
    else{
      setNames(defaultList);
    }
  }

  function fetchList (search) {
    const fetchOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    };

    fetch(`https://api.spotify.com/v1/search?q=${search}&type=artist`, fetchOptions)
      .then(response => response.json())
      .then(data => {
        setStatus(true)
        setNames(data)
      });
  };

  return (
      <Background>
        <Head>
          <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans"/>
          <title>Album Ranking App</title>
        </Head>
        <Titles>pick an artist</Titles>
        <Form>
          <Form.Input
            onChange = {onChange}
          />
          <Form.Button
          >
            ok
        </Form.Button>
        </Form>
        <ListOfArtists>
          {names.artists.items.map((item,itemId) => {
            return (
              <ListOfArtists.Item
              key = {itemId}

              >
                {item.name}
              </ListOfArtists.Item>
              )
            }
          )}
        </ListOfArtists>
      </Background>
  )
}
