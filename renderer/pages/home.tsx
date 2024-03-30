import React from 'react';
import Head from 'next/head';

import { styled } from '@mui/material';
import Header from '../components/Header';
import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';

export default function HomePage(props: { wine: any[] }) {
    console.log(props.wine);
    return <></>;
}
export const getStaticProps: GetStaticProps = async () => {
    const wine = await prisma.wine.findMany();
    return {
        props: { wine },
        revalidate: 10,
    };
};
