import { 
  ORDER_ALL_VIDEOGAMES,
  ORDER_FILTER_CLICK,
  ORDER_FILTER_VIDEOGAME,
  SET_ALL_VIDEOGAMES,  
  SET_DETAIL_VIDEOGAME,  
  SET_FILTER_VIDEOGAME, 
  SET_FLAG_EXISTS, 
  SET_FLAG_GENRES, 
  SET_GENRES, 
  SET_INFO_FILTER, 
  SET_INPUT_ORDER,
  SET_SLICE_VIDEOGAMES, 
  SET_VIDEOGAME, 
  SET_WHAT_RENDER
} from '../constant/constant'

const initialStore={
  whatRender:'',
  orderFilterClick:false,
  videogame:[],
  allVideogames:[],
  copyAllVideogames:[],
  filterVideogames:[],
  copyFilterVideogames:[],
  genres:[],
  flagGenres: false,
  flagExists:false,
  infoFilter:{
    genres:[],
    exists:''
  },
  sliceVideogames:[],
  orderInfo:'',
  detailVideogame:{}
}

export const reducer= (store=initialStore,action)=>{
  switch (action.type) {
    case SET_WHAT_RENDER:
      return {
        ...store,
        whatRender: action.payload
      } 
    case ORDER_FILTER_CLICK:
      return {
        ...store,
        orderFilterClick: !store.orderFilterClick
      } 
    case SET_VIDEOGAME:
      return {
        ...store,
        videogame: action.payload,
        whatRender:'videogame'
      } 
    case SET_ALL_VIDEOGAMES:
      return {
        ...store,
        allVideogames: action.payload,
        copyAllVideogames: action.payload,
        whatRender:'allVideogames'
      } 
    case ORDER_ALL_VIDEOGAMES:
      return {
        ...store,
        allVideogames: action.payload,
      } 
    case SET_FILTER_VIDEOGAME:
      return {
        ...store,
        filterVideogames: action.payload,
        copyFilterVideogames: action.payload,
        whatRender:'filterVideogames'
      } 
    case ORDER_FILTER_VIDEOGAME:
      return {
        ...store,
        filterVideogames: action.payload,
      } 
    case SET_GENRES:
      return {
        ...store,
        genres: action.payload
      } 
    case SET_FLAG_GENRES:
      return {
        ...store,
        flagGenres: action.payload
      } 
    case SET_FLAG_EXISTS:
      return {
        ...store,
        flagExists: action.payload
      } 
    case SET_INFO_FILTER:
      return {
        ...store,
        infoFilter: action.payload
      } 
    case SET_SLICE_VIDEOGAMES:
      return {
        ...store,
        sliceVideogames: action.payload
      } 
    case SET_INPUT_ORDER:
      return {
        ...store,
        orderInfo: action.payload
      } 
    case SET_DETAIL_VIDEOGAME:
      return {
        ...store,
        detailVideogame: action.payload
      } 
    default:
      return store
  }
}