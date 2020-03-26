import styled from 'styled-components';


export const Container = styled.div`
  margin-top: 20px;
`

export const NoteList = styled.ul`
  
`

export const NoteItem = styled.li`
  min-height: 140px;
  position: relative;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
`

export const NoteContent = styled.div`
  padding-right: 165px;
`
export const NoteNoContent = styled.div``

export const NoteTitle = styled.h2`
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  color: #969696;
`

export const NoteImgWrapper = styled.div`
  width: 150px;
  position: absolute;
  top: 50%;
  margin-top: -60px;
  right: 0;
  height: 100px;
`
export const NoteImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
`

export const NoteDesc = styled.p`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
`
export const BoardWrapper = styled.div`
  margin-left: 4.16667%;
`
export const BoardItem = styled.div`
  cursor: pointer;
`
export const BoardImg = styled.img`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
`