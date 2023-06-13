import { useState, useEffect } from 'react'
import axios from 'axios';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './genre.styles'

export default function GenreView(props) {

   const back = process.env.NEXT_PUBLIC_URI

   const [genreList, setGenreList] = useState();
   const [postList, setPostList] = useState();
   var imageArray = [];
   var array;
   var dataArr;

    // 장르명 get
  useEffect(() => {
   axios.get(`${back}genreList`)
     .then((res) => {
       setGenreList(res.data);
     })
   }, [])

   const onClickWhole = async () => {
      const res = await axios.get(`${back}postList`)
      let resArr = res.data;
      dataArr = res.data;
      console.log(dataArr)
      for (let i = 0; i < res.data.length; i++) {
         axios.post(`${back}postImageName`, {"postImageName": res.data[i].postImageName}, { headers: { "Content-type": "application/json; charset=UTF-8" }, responseType: 'blob' })
         .then((response) => {
             // console.log(res.data)
             const myFile = new File([response.data], dataArr[i].postImageName);
             const reader = new FileReader();
             reader.readAsDataURL(myFile);
             
             reader.onloadend = () => {
                 // console.log(reader.result)
                setBase(reader.result);
             array = {
               postSeq: dataArr[i].value1,
               artistSeq: dataArr[i].value2,
               genreSeq: dataArr[i].value3,
               postTitle: dataArr[i].value4,
               postContent: dataArr[i].value5,
               postSummary: dataArr[i].value6,
               postPrice: dataArr[i].value7,
               postImageName: reader.result,
               postDate:  dataArr[i].value8,
             }
             
             imageArray.push(array);
             setPostList(imageArray);
            
         }
      
         })
      }
   }
      
   const onClickGenre = async (genreSeq) => {
      const genre = await axios.get(`${back}genreView?genreSeq=${genreSeq}`)
      console.log(genre)
      setPostList(genre.data);
      dataArr = res.data;
      for (let i = 0; i < genre.data.length; i++) {
         axios.post(`${back}postImageName`, {"postImageName": res.data[i].postImageName}, { headers: { "Content-type": "application/json; charset=UTF-8" }, responseType: 'blob' })
         .then((response) => {
             // console.log(res.data)
             const myFile = new File([response.data], dataArr[i].postImageName);
             const reader = new FileReader();
             reader.readAsDataURL(myFile);
             
             reader.onloadend = () => {
                 // console.log(reader.result)
                setBase(reader.result);
             array = {
               postSeq: dataArr[i].value1,
               artistSeq: dataArr[i].value2,
               genreSeq: dataArr[i].value3,
               postTitle: dataArr[i].value4,
               postContent: dataArr[i].value5,
               postSummary: dataArr[i].value6,
               postPrice: dataArr[i].value7,
               postImageName: reader.result,
               postDate:  dataArr[i].value8,
             }
             
             imageArray.push(array);
             setPostList(imageArray);
             // console.log(base64)
         }
             

         })
      
   }
}
   

  return (
    <>  
        <C.Wrapper>
         <C.GenreBanner>
            <C.BannerTitle>작품 판매 </C.BannerTitle>
            <C.BannerSubTitle>Buy Original Paintings</C.BannerSubTitle>
         </C.GenreBanner>
            <C.GenreSelect>
               <C.Genre onClick={onClickWhole} >전체보기</C.Genre>
               {genreList?.map((el, i) => (
               <C.Genre onClick={() => onClickGenre(genreList[i].genreSeq)} >{genreList[i].genreName}</C.Genre>
               ))}
               <C.Select>
                  <option value={true}>추천순</option>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>리뷰 많은순</option>
                  <option>저가순</option>
                  <option>고가순</option>
               </C.Select>
            </C.GenreSelect>
         <C.GenreWrapper>
         {postList?.map((el, i) => (
            <C.GenreColumn href="/art/work">
               <C.ColumnImage src={postList[i].postImageName}>
                  <C.ColumnInfo>
                     <C.ColumnTitle>{postList[i].postTitle}</C.ColumnTitle>
                     <C.ColumnContent>{postList[i].postSummary}</C.ColumnContent>
                     <C.ColumnArtist>
                        <C.ColumnPrice>{postList[i].postPrice} 원</C.ColumnPrice>
                     </C.ColumnArtist>
                     <C.ColumnArtist>
                        <C.ColumnProfile></C.ColumnProfile>
                        <C.ColumnName>유미정</C.ColumnName>
                     </C.ColumnArtist>
                  </C.ColumnInfo>
               </C.ColumnImage >
            </C.GenreColumn>
         ))}
         </C.GenreWrapper>
         <LayoutPageNumber/>

        </C.Wrapper>
    </>
  )

}