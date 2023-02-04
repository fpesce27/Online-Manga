/* eslint-disable react-hooks/rules-of-hooks */
import { Spacer } from '@nextui-org/react';
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import { getMangas } from '../api/functions';
import { Slider } from './slider'

export async function getServerSideProps() {
    const highestRated = await getMangas();
    const popular = await getMangas('bypopularity');
    return {
      props: {
        highestRated,
        popular,
      },
    };
  }

function index(props) {

  return (
    <Layout>
        <Slider title='Highest Rated' series={props.highestRated.data}/>
        <Slider title='Most Popular' series={props.popular.data}/>
        <Spacer />
    </Layout>
  )
}

export default index