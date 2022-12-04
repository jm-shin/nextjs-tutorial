import Layout from "../components/Layout";
import React from "react";

const menu = [
    {
        id: 1,
        productName: '아메리카노',
        type: 'ice',
        size: 'S',
        price: 900
    },
];

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