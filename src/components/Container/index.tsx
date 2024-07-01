import styled from "styled-components";

export const Container = styled.section<{column:boolean}>`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    gap:24px;
    justify-content: center;
    align-items: center;
    padding: 24px 0px;
`