import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 30px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
`

export const Title = styled.h2`
  margin: 20px 0;
  text-align: center;
  font-size: 18px;
  color: #ea6f5a;
`
export const FormWrapper = styled.div`
  
`

export const FormItem = styled.div`

`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  &::placeholder {
    color: #aaa;
  }
`

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 14px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
`