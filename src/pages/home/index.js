import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import {
  Container,
  NoteList,
  NoteItem,
  NoteTitle,
  NoteDesc,
  NoteContent,
  NoteNoContent,
  NoteImgWrapper,
  NoteImg,
  BoardWrapper,
  BoardItem,
  BoardImg
} from './style'

class Home extends Component {

  render () {
    return (
      <Container className='container'>
        <Row>
          <Col span={16}>
            <NoteList>
              <NoteItem>
                <NoteContent>
                  <NoteTitle>李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”</NoteTitle>
                  <NoteDesc>父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。 绝大多数情况下，妈妈和孩子都是最...</NoteDesc>
                </NoteContent>
                <NoteImgWrapper>
                  <NoteImg src="https://upload-images.jianshu.io/upload_images/11864358-2c5f48f03dffb247.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></NoteImg>
                </NoteImgWrapper>
              </NoteItem>
              <NoteItem>
                <NoteNoContent>
                  <NoteTitle>李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”</NoteTitle>
                  <NoteDesc>父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。 绝大多数情况下，妈妈和孩子都是最...</NoteDesc>
                </NoteNoContent>
              </NoteItem>
            </NoteList>
          </Col>
          <Col span={8}>
            <BoardWrapper>
              <BoardItem>
                <BoardImg src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></BoardImg>
              </BoardItem>
              <BoardItem>
                <BoardImg src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"></BoardImg>
              </BoardItem>
            </BoardWrapper>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => ({
  getHomeData: () => {

  }
})

export default connect(mapState, mapDispatch)(Home)