import Link from "next/link";

const Header = () => {
    return (
        <div>
            <Link href="/">홈</Link>&ensp;
            <Link href="/about">내 소개</Link>
        </div>
    );
}

export default Header;