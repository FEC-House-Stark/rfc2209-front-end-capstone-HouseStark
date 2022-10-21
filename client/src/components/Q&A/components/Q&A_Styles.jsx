import styled from 'styled-components';

const QandASearchView = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
gap: 20px
`;

const QandAQuestionActions = styled.span`
display: flex;
flex-direction: row;
align-items: flex-end;
padding-top: 10px;
padding-bottom: 15px;
height: fit-content;
`;

const buttonStyle = {
  background:'white',
  color:'black',
  fontSize: '12px',
  fontWeight:'600',
  textAlign: 'center',
  padding: '10px 10px 10px 10px',
  width: '80%',
  border: '1px solid black'
}

const QandAOverViewStyle = styled.div`
border-bottom: 1pt solid #666;
display: grid;
grid-template-rows:5ch 5ch / auto auto;
padding: 10px 10px;
gap: 10px;
font-family: serif;
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
  grid-template-columns: 60% 40% ;
  height: 20px;
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

const photoStyle = {
  border:'1px solid black',
  minHeight:'100px',
  minWidth:'100px',
  maxHeight: '100px',
  marginRight:'20px'
}

const modalBoxStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: '50%',
    minHeight:'300px',
    minWidth:'500px',
    transform: 'translate(-50%, -50%)',
  },
};


const modalViewStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap:'10px',
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
}