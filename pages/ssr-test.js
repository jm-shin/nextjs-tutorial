import Layout from "../components/Layout";
import React from "react";

class SsrTest extends React.Component {
    static async getInitialProps ({req}) {
        return req? { from: 'server'} : { from: 'client'}
    }

    render() {
        return (
          <Layout>
              {this.props.from} 에서 실행되었습니다.
          </Layout>
        );
    }
}

export default SsrTest;