
import styled from 'styled-components';

const Background = styled.div`
    width : 100%;
    background-color : ${({ theme }) => theme.colors.home.bg};
    margin : 0px;
    height : 625px;
    overflow : hidden;
`;

export default Background;