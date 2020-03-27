import $http from '../utils/http'
const origin = ''
const apis = {
	detail: `${origin}/detail`,
  headerList: `${origin}/headerList`,
  home: `${origin}/home`,
  homeList: `${origin}/homeList`,
  login: `${origin}/login`
}

export function getDetail (params = {}) {
  return $http({
    methods: 'get',
    url: apis.detail,
    params: params
  })
}

export function getHeaderList (params = {}) {
  return $http({
    methods: 'get',
    url: apis.headerList,
    params: params
  })
}

export function getHome (params = {}) {
  return $http({
    methods: 'get',
    url: apis.home,
    params: params
  })
}

export function getHomeList (params = {}) {
  return $http({
    methods: 'get',
    url: apis.homeList,
    params: params
  })
}

export function login (params = {}) {
  return $http({
    methods: 'get',
    url: apis.login,
    params: params
  })
}