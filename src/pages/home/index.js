import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { getHomeData, getHomeListData, toggleScrollTop } from './store/actionCreators'
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
  BoardImg,
  MoreLoading,
  BackTop
} from './style'

class Home extends Component {

  componentDidMount () {
    const { getHomeData, toggleScrollTop, showScroll } = this.props
    getHomeData()
    this.initBind(toggleScrollTop, showScroll)
  }

  backTop () {
    window.scrollTo(0, 0)
  }

  initTop (status) {
    return (
      <BackTop className={status ? '' : 'hide'} onClick={this.backTop}>
        <svg viewBox="0 0 1024 1024" focusable="false"  data-icon="caret-up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path></svg>
      </BackTop>
    )
  }

  initArticleList (articleList) {
    return articleList.map((item, index) =>{
      if (item.get('imgUrl')) {
        return (
          <Link key={index} to={`/detail/${item.get('id')}`}>
            <NoteItem>
              <NoteContent>
                <NoteTitle>{item.get('title')}</NoteTitle>
                <NoteDesc>{item.get('desc')}</NoteDesc>
              </NoteContent>
              <NoteImgWrapper>
                <NoteImg src={item.get('imgUrl')}></NoteImg>
              </NoteImgWrapper>
            </NoteItem>
          </Link>
        )
      } else {
        return (
          <Link key={index} to={`/detail/${item.get('id')}`}>
            <NoteItem>
              <NoteNoContent>
                <NoteTitle>{item.get('title')}</NoteTitle>
                <NoteDesc>{item.get('desc')}</NoteDesc>
              </NoteNoContent>
            </NoteItem>
          </Link>
        )
      }
    })
  }

  initBoard (recommendList) {
    return recommendList.map((item) => {
      return (
        <BoardItem key={item.get('id')}>
          <BoardImg src={item.get('imgUrl')}></BoardImg>
        </BoardItem>
      )
    })
  }

  initBind (toggleScrollTop, status) {
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop
      if (top > 100) {
        if (!status) {
          toggleScrollTop(true)
        }
      } else {
        if (!status) {
          toggleScrollTop(false)
        }
      }
    })
  }

  render () {
    const { articleList, recommendList, getTopicListData, showScroll } = this.props
    return (
      <Container className='container'>
        <Row>
          <Col span={16}>
            <NoteList>
              {this.initArticleList(articleList)}
            </NoteList>
            <MoreLoading onClick={getTopicListData}>阅读更多</MoreLoading>
          </Col>
          <Col span={8}>
            <BoardWrapper>
              {this.initBoard(recommendList)}
            </BoardWrapper>
          </Col>
        </Row>
        {this.initTop(showScroll)}
      </Container>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    recommendList: state.getIn(['home', 'recommendList']),
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeData: () => {
      dispatch(getHomeData())
    },
    getTopicListData: () => {
      dispatch(getHomeListData())
    },
    toggleScrollTop: (status = false) => {
      dispatch(toggleScrollTop(status))
    }
  }
}

export default connect(mapState, mapDispatch)(Home)