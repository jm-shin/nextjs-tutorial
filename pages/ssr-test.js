import Layout from "../components/Layout";
import React from "react";
import axios from "axios";

class SsrTest extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return {
            users: response.data
        }
    }

    render() {
        const { users } = this.props;
        const userList = users.map(
            user => <li key={user.id}>{user.username}</li>
        )

        return (
          <Layout>
              <ul>
                  {userList}
              </ul>
          </Layout>
        );
    }
}

export default SsrTest;