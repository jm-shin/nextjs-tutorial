import Layout from "../components/Layout";
import React from "react";
import axios from 'axios';

const menu = [
    {
        id: 1,
        productName: '아메리카노',
        type: 'ice',
        size: 'S',
        price: 900
    },
];

export async function getStaticPaths() {
    const res = await fetch('https://.../posts');
    const posts = await res.json();

    const paths = posts.map((post) => ({
        params: { id: post.id }
    }));

    return { paths, fallback: false };
}

class MammothCoffee extends React.Component {
    render() {
        const products = menu;
        const productList = products.map(
            product => <li key={product.id}>{product.productName}</li>
        )

        return (
            <Layout>
                <ul>
                    {productList}
                </ul>
            </Layout>
        );
    }
}

export default MammothCoffee;
