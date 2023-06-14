import * as C from './board.edit.styles'
import axios from 'axios'
import React, {useCallback, useState, useEffect} from 'react';
import { useRouter } from 'next/router';

export default function CommissionBoardEdit(props) {
  
  const back = process.env.NEXT_PUBLIC_URI
  const [artistList, setArtistList] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {
    axios.get(`${back}artistAllList`)
    .then((res) => {
      console.log(res)
      setArtistList(res.data);
    })

    // axios.get(`${back}updateView?commseq=${commSeq}`)
    //   .then((res) => {

    //   })
  }, [])

  const onChangeCate = (event) => {
    const artistName = event.target.value;
    setArtist(artistName);
  }

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 수정하기</C.BoardFormTitle>
          <C.Line/>

          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv onChange={onChangeCate} >
              {artistList?.map((el, i) => (
                <option value={el.artistName}>{el.artistName}</option>
              ))}
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent placeholder='작품 의뢰 내용을 입력하세요.'></C.CommissionContent>
          </C.ContentWrapper>


          <C.BtnWrapper>
            <C.CancelBtn>취소</C.CancelBtn>
            <C.SubmitBtn>작성하기</C.SubmitBtn>
          </C.BtnWrapper>

        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}