import React from 'react';

import { GetStaticProps } from 'next';
import prisma from '../lib/prisma';
import { Wine } from '../types/Wine';

export default function HomePage(props: { wine: Wine[] }) {
    console.log(props.wine[0].color);
    return <></>;
}
export const getStaticProps: GetStaticProps = async () => {
    const wine = await prisma.wine.findMany();
    return {
        props: { wine },
        revalidate: 10,
    };
};
