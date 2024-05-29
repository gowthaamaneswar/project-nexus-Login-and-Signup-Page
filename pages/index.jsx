import React from 'react';
import Container from '../components/Container';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Login and Signup</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            </Head>
            <Container />
        </div>
    );
}
