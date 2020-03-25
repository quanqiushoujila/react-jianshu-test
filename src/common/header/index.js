import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group'
// import { Link } from 'react-router-dom'
import { 
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Nav,
  NavItemLink,
  NavItem,
  Addition,
  Button,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoTitle,
  SearchInfoSwitch
} from './style'

class Header extends Component {
  getAreaList () {
    const { focused, list, mouseIn, handleMouseEnter, handleMouseLeave } = this.props
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              <i className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
          {
            list.map((item) => {
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })
          }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { focused, list, handleInputFocus, handleInputBlur } = this.props
    return (
      <HeaderContainer>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItemLink className='left active'>首页</NavItemLink>
            <NavItemLink className='left'>下载APP</NavItemLink>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide">
                <NavSearch 
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}
                  className={focused ? 'focused' : ''}>
                </NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                &#xe614;
              </i>
              {this.getAreaList()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderContainer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    pageTotal: state.getIn(['header', 'pageTotal'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: (list) => {
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFoucs())
    },
    handleInputBlur: () => {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)