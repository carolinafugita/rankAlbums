import styled from 'styled-components';


const ListOfArtists = styled.div`
    position : absolute;
    left : 475px;
    height : 200px;
    overflow-y : auto;
    text-align : center;
    justify-content: center;
    align-items: center;
`;

ListOfArtists.Item = styled.button`
    width : 350px;
    height : 40px;
    border : 10px;
    padding : 4px;
    border-radius : 5px;
    text-align : center;
    color : ${({ theme }) => theme.colors.home.contrast};
    font-family : "Open Sans";
    font-weight : bold;
    display : block;
    &:hover {
        background-color : ${({ theme }) => theme.colors.home.contrast};
        color : ${({ theme }) => theme.colors.home.bg};
    }
    background-color : ${({ theme }) => theme.colors.home.bg};
`;


export default ListOfArtists;