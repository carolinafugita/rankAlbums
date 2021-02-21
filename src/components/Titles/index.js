

import styled from 'styled-components';

const Titles = styled.div`
    color : ${({ theme }) => theme.colors.home.contrast};
    font-size : 40px;
    font-family : "Open Sans";
    font-weight : bold;
    text-align : center;
    margin-top : 100px;
    margin-bottom : 50px;
`;

export default Titles;