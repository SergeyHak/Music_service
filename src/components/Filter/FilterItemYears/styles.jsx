import styled from 'styled-components'

export const FilterItemsYearWrapper = styled.div`
    display: flex;
`

export const FilterItemsYearLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FilterYearLabel = styled.label`
    margin-left: 10px;
    margin-right: 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${props =>props.isDark ? "#ffffff ":"#080808 "};
    &:hover{
        text-decoration: underline;
        cursor: pointer;
        color: #b672ff;
    }
`
