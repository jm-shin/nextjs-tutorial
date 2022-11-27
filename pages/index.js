import Link from "next/link";
import Layout from "../components/Layout";
import Head from 'next/head';

const Index = () => (
    <Layout>
        <Head>
            <title>
                Index 페이지
            </title>
        </Head>
        <div>
            <h1>
                예제 제목입니다.
            </h1>
            <h2>
                <Link href="/about">
                    <div style={{background: "black", color: "white"}}>소개</div>
                </Link>
            </h2>
        </div>
    </Layout>
);

export default Index;