import React from "react";
import {useEffect, useState} from "react";

const BookRow = (props) => {
    const image = props.row.image;
    const title = props.row.title;
    const author = props.row.author;
    const desc = props.row.description;

    return (
        <li>
            <a href="#" className="bookRow">
                <div className="bookImg">
                    <img src={image}/>
                </div>
                <div className="bookDesc">
                    <div className="title" dangerouslySetInnerHTML={{__html: title}}/>
                    <div className="cont">
                        <span className="author">{author}</span>
                        <span dangerouslySetInnerHTML={{__html: desc}}/>
                    </div>
                </div>
            </a>
        </li>
    );
};

const ListView = () => {

    const [articles, setArticles] = useState(null);

    const apiGet = async (type, param) => {
        const apiUrl = 'https://openapi.naver.com/v1/search/' + type + '?query=' + param;
        const resp = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID || '',
                'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET || '',
            }
        });
        resp.json().then(data => {
            setArticles(data.items);
        });

    };

    useEffect(() => {
        apiGet('book', 'React');
    }, []);

    return (
        <div className="listArea">
            <ul className="listView">
                {
                    articles &&
                    articles.map((v, inx) => {
                        return <BookRow key={inx} row={v}/>
                    })
                }
            </ul>
        </div>
    );
}

export default ListView;