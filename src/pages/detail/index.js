import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailData } from './store/actionCreators'
import {
  DetailContainer,
  DetailWrapper,
  Title,
  ArticleWrapper
} from './style'

class Detail extends Component {

  componentDidMount () {
    this.props.getDetailData()
  }

  render () {
    const { detailData } = this.props
    return (
      <DetailContainer>
        <DetailWrapper>
          <Title>{detailData.title}</Title>
          <ArticleWrapper dangerouslySetInnerHTML={{ __html: detailData.content }}>
          </ArticleWrapper>
        </DetailWrapper>
      </DetailContainer>
    )
  }
}
const mapState = (status) => ({
  detailData: status.getIn(['detail', 'detailData'])
})

const mapDispatch = (dispatch) => ({
  getDetailData: () => {
    dispatch(getDetailData())
  }
})

export default connect(mapState, mapDispatch)(Detail)