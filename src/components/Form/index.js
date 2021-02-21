
import styled from 'styled-components';


const Form = styled.form`
    display : flex;
    margin : auto;
    text-align : center;
    justify-content: center;
    align-items: center;
    margin-top : 50px;
    margin-bottom : 50px;
`;

Form.Input = styled.input`
    width : 500px;
    height : 40px;
    border : 10px;
    padding : 4px;
    border-radius : 5px;
    text-align : center;
    margin-left : 10px;
    margin-right : 10px;
    color : ${({ theme }) => theme.colors.home.bg};
    font-family : "Open Sans";
    font-weight : bold;
    display : block;
    background-color : ${({ theme }) => theme.colors.home.contrast};
`;

Form.Button = styled.button`
    width : 50px;
    height : 40px;
    border : 10px;
    padding : 4px;
    border-radius : 5px;
    text-align : center;
    font-family : "Open Sans";
    font-weight : bold;
    font-size : 20px;
    color : ${({ theme }) => theme.colors.home.bg};
    display : block;
    margin-left : 10px;
    margin-right : 10px;
    background-color : ${({ theme }) => theme.colors.home.contrast};
`;

export default Form;