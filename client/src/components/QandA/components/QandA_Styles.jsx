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
  font-weight:100;
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

const frostyStyle = {
  overlay:{
    position: 'fixed',
    inset: '0px',
    backgroundColor: 'rgba(234,236,233,0.4)',
},
  content:{
    backgroundColor:'rgba(234,236,233,0.1)',
    backdropFilter: 'blur(7px)',
    boxShadow: '0 6px 35px rgba(0,0,0,0.65)',
    borderRadius: '25px',
  }
};

export {
  QandASearchView,
  QandAQuestionActions,
  QandAOverViewStyle,
  QandAHeader,
  QandAHSearchBar,
  QandAQuestionListView,
  QuestionBar,
  QuestionBarActionItem,
  AnswersListStyle,
  ErrorStyle,
  UploadPhotos,
  frostyStyle,
}