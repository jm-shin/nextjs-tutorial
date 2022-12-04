import Link from "next/link";

const linkStyle = {
    marginRight: '1rem'
}

const Header = () => {
    return (
        <div>
            <Link href="/">홈</Link>&ensp;
            <Link href="/about">내 소개</Link>&ensp;
            <Link prefetch href="/ssr-test">SSR 테스트</Link>&ensp;
            <Link href="/mammoth-coffee">매머드 커피 계산기</Link>&ensp;
        </div>
    );
}

export default Header;