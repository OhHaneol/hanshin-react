import { Link } from "react-router-dom";

import styled from "styled-components";

//  styled.ul? => NavList 를 콜하면 ul 태그를 넣고 안에 있는 속성을 넣어주세요-
const NavList = styled.ul`
    display: flex;
    li {
        margin-right: 10px;
        a {
            color: #fff;
            background: #000;
            text-decoration: none;
            padding: 10px;
        }
    }
`;

const Header = () => {
    return (
            <NavList>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/movie">Movie</Link></li>
            </NavList>
        )
}

export default Header;