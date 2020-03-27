import styled from 'styled-components';

export const DetailContainer = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  min-height: calc(100vh - 58px);
`
export const DetailWrapper = styled.div`

  min-width: 980px;
  max-width: 980px;
  background-color: #fff;
  margin: 0px auto 0;
  padding: 20px 0;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  color: #404040;
  text-align: center;
`
export const ArticleWrapper = styled.div`
  margin-top: 20px;
  padding: 0 40px;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
  b {
    font-weight: bold;
  }
`