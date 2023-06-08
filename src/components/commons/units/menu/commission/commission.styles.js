import styled from "@emotion/styled";

// 메뉴 - 작품의뢰 
export const Wrapper = styled.div`
width: 1200px;
height: 1200px;
margin: auto;
    padding: 40px;   

`
export const CommissionBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto;
`

export const CommissionTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin-bottom: 20px;
`
export const CommissionSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const CommissionWrapper = styled.div`
    width: 1200px;
    height: 600px;
`

export const Link= styled.a`
    width: 140px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    background-color: black;
    text-decoration: none;
`

// 배너2
export const CommissionTableBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin: auto;
`
export const Message = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 40px;
    color: rgba(0,0,0,0.9);
    font-size: 23px;
    font-family: 'Times New Roman', Times, serif;
    line-height: 35px;
    
    span{
        font-size: 26px;
        font-weight: 700;
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 10px;
    }
`



// 게시판 
export const CommissionTable = styled.div`
    width: 1100px;
    height: 300px;
    margin-top: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
`
export const Table = styled.table`
    width: 1100px;
    height: 230px;
`

export const Tr = styled.tr`
    text-align: center;

    &:nth-child(2) {
        color: brown;
        font-weight: 600;
    }
    
`
export const Th = styled.th `
    height: 36px;
    background-color: rgba(0,0,0,0.1);
    border-radius: 3px;
    
`

export const No = styled.td`
   border-bottom: 1px solid rgba(0,0,0,0.1);
    
`
export const Title = styled.td `
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const Writer = styled.td`
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const Date = styled.td `
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

