import styled from 'styled-components';

const QandASearchView = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
max-height: 90vh;
overflow-y: auto;
padding-right :15px;
`;

const QandAQuestionActions = styled.span`
display: flex;
flex-direction: row;
padding-top: 20px;
padding-bottom: 15px;
height: fit-content;
gap: 20px;
`;

const buttonStyle = {
  background:'white',
  color:'black',
  fontSize: '15px',
  fontWeight:'600',
  textAlign: 'center',
  padding: '10px 10px 10px 10px',
  width: '180px',
  border: '1px solid black',
  cursor:'pointer',
}

const QandAOverViewStyle = styled.div`
display: grid;
grid-template-rows:5ch 5ch / auto auto;
font-family: serif;
border-bottom: 2px ridge;
padding: 10px 10px;
gap: 10px;
`;

const QandAHeader = styled.div`
display: grid;
align-items: flex-start;
text-align: left;
`;

const QandAHSearchBar = styled.form`
display: grid;
align-items: stretch;
grid-template-columns: 100% 5% ;
height: 30px;
gap: 10px 0px;
`;

const SearchQustionMagnifyGlass = {
  display:'flex',
  alignItems: 'center',
  marginLeft: '-30px'
}


const rowFlex = {
  display: 'flex',
  flexDirection: 'row',
}

const QandAQuestionListView = styled.div`
  display: grid;
  align-items: stretch;
  gap: 5px;
  padding-top:10px;
  border-bottom: 2px ridge;
`;


const QuestionBar = styled.div`
  display: grid;
  align-items: stretch;
  grid-template-columns: 70% 30% ;
  padding-bottom: 10px;
  `
const QuestionBarActionItem = styled.span`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  font-size: small;
  color : #686868	;
  `
const AnswersListStyle = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 10px;
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 180px;
  `

const moreAnswersButton = {
  background:'white',
  color:'black',
  fontSize: '11px',
  paddingBottom:'10px',
  fontWeight:'600'
}


const AnswerActionItemStyle = styled.div`
display: flex;
flex-direction: row;
gap: 10px ;
padding: 5px;
font-size: small;
color : #808080	;
`


const modalBoxStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    minHeight:'700px',
    minWidth:'800px',
    transform: 'translate(-50%, -50%)',
  },
};

const photoModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    minHeight:'40vh',
    minWidth:'60vh',
    transform: 'translate(-50%, -50%)',
  },
};

const photoStyle = {
  border:'1px solid black',
  minHeight:'100px',
  minWidth:'100px',
  maxHeight: '100px',
  marginRight:'20px',
  cursor:'pointer',
}

const modalViewStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap:'10px',
}

const modalImgStyle = {
  display:'block',
  marginLeft:'auto',
  marginRight:'auto',
  width:'60%',
}

const SellerFontWeight = {
  fontWeight:'bolder',
  color:'#505050',
}

const ErrorStyle = styled.p`
color: red;
font-size: small;
margin: 0;
padding:0;
text-align: left;
`
const UploadPhotos = styled.div`
display: flex;
flex-direction: row;
max-height: 100px;
gap: 15px;
padding-top: 10px;
`;

const uploadPhotoStyle = {
  border:'1px solid black',
  objectFit: 'scale-down',
  maxHeight: '100px',
}

export {
  QandASearchView,
  QandAQuestionActions,
  SearchQustionMagnifyGlass,
  buttonStyle,
  QandAOverViewStyle,
  QandAHeader,
  QandAHSearchBar,
  QandAQuestionListView,
  rowFlex,
  QuestionBar,
  QuestionBarActionItem,
  AnswersListStyle,
  moreAnswersButton,
  AnswerActionItemStyle,
  photoStyle,
  modalBoxStyle,
  modalViewStyle,
  SellerFontWeight,
  photoModalStyle,
  modalImgStyle,
  ErrorStyle,
  UploadPhotos,
  uploadPhotoStyle,
}