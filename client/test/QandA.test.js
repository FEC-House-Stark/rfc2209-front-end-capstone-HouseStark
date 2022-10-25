import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testQuestions } from "./QandA.test.data.js";
import {
  AddanAnswer,
  AddaQuestion,
  AnswerHelpfulness,
  AnswerPhoto,
  AnswerPhotos,
  AnswerReport,
  AnswersListView,
  AnswerView,
  QandA,
  QuestionHelpfulness,
  QuestionReport,
  QuestionSearchBar,
  QuestionsView,
  QuestionView,
  MoreQuestionsButton,
  AddaQuestionModal,
  AddanAnswerModal,
} from '../src/components/Q&A/components'
import { useState } from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe("Question and Answers", () => {
  // Add_A_Question.jsx
  describe("Add a Question", () => {
    const props = {
      questions: testQuestions.results,
      setQuestions: '() -> {}',
      product_id: testQuestions.product_id,
      productInfo: testQuestions.productInfo,
      handleTrackingClick: () => {}
    }
    const wrapper = shallow(<AddaQuestion {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add a Question' button text", () => {
      expect(wrapper.find('[element-name="Add_A_Question"]').text()).toContain('Add a Question');
    });
    test("It renders a modal when clicked", () => {
      const handleClick = jest.fn()
      wrapper.find('[element-name="Add_A_Question"]').simulate('click', { preventDefault: () => {}})
      expect(handleClick).toHaveBeenCalled()
    })
  });



  // Add_An_Answer.jsx
  describe("Add an Answer", () => {
    const props = {
      question_id: testQuestions.results[0].question_id,
      handleTrackingClick: '() -> {}'
    }
    const wrapper = shallow(<AddanAnswer {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add an Answer' button text", () => {
      expect(wrapper.find('[element-name="Add_Answer"]').text()).toContain('Add an Answer');
    });
  });

  // Answer_Helpfulness.jsx
  describe("Answer Helpfulness", () => {
    const props = {
      handleTrackingClick: '() -> {}',
      helpfulness: testQuestions.results[0].question_helpfulness,
      handleHelpfulClick: '() -> {}'
    }
    const wrapper = shallow(<AnswerHelpfulness {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Helpful?' text", () => {
      expect(wrapper.find('[element-name="Answer_Helpfulness"]').text()).toContain('Helpful?');
    });
  });

  // Answer_Photo.jsx
  describe("Answer Photo", () => {
    const props = {
      photo: {
        url: testQuestions.results[0]['answers']['5988714']['photos'][0]
      },
      setIsOpen: '() -> {}',
      setClickImg: '() -> {}',
    }
    const wrapper = shallow(<AnswerPhoto {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders an image", () => {
      expect(wrapper.props().src).toEqual("https://www.meme-arsenal.com/memes/cd062aa06bb3ec2319621fd3979838d4.jpg");
    });
  });

  // Answer_Photos.jsx
  describe("Answer Photos", () => {
    const props = {
      photos: [
        {
          id: 1,
          url: testQuestions.results[0]['answers']['5988714']['photos'][0]
        }
      ],
      handleTrackingClick: '() -> {}',
    }
    const wrapper = shallow(<AnswerPhotos {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It has children", () => {
      expect(wrapper.children().length).toEqual(2);
    });
  });

  // Answer_Report.jsx
  describe("Answer Report", () => {
    const props = {
      handleReportClick: '() -> {}',
      handleTrackingClick: '() -> {}',
    }
    const wrapper = shallow(<AnswerReport {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Report' text", () => {
      expect(wrapper.find('[element-name="Answer_Report"]').text()).toContain('Report');
    });
  });

  // Answer_View.jsx
  describe("Answer View", () => {
    const props = {
      answer: testQuestions.results[0]['answers']['5988714'],
      handleTrackingClick: '() -> {}',
    }
    const wrapper = shallow(<AnswerView {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It has children", () => {
      expect(wrapper.children().length).toEqual(3);
    });
  });

  // Answers_List_View.jsx
  describe("Answers List View", () => {
    const props = {
      question_id: testQuestions.results[0].question_id,
      handleTrackingClick: '() -> {}',
    }
    const wrapper = shallow(<AnswersListView {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It has children", () => {
      expect(wrapper.children().length).toEqual(1);
    });
  });

  // More_Questions.jsx
  describe("More Questions", () => {
    const props = {
      handleMoreQuestion: '() -> {}',
      handleLessQuestion: '() -> {}',
      handleTrackingClick: '() -> {}',
      moreQuestions: false,
    }
    const wrapper = shallow(<MoreQuestionsButton {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'More Answered Questions' text", () => {
      expect(wrapper.find('[element-name="More_Questions"]').text()).toContain('More Answered Questions');
    });
  });

  // Question_Helpfulness.jsx
  describe("Question Helpfulness", () => {
    const props = {
      handleTrackingClick: '() -> {}',
      handleHelpfulClick: '() -> {}',
      question_helpfulness: testQuestions.results[0].question_helpfulness
    }
    const wrapper = shallow(<QuestionHelpfulness {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Helpful?' text", () => {
      expect(wrapper.find('[element-name="Question_Helpfulness"]').text()).toContain('Helpful?');

    });
    test("It renders helpfulness count", () => {
      expect(wrapper.find('[element-name="Question_Helpfulness"]').text()).toContain(`Yes (${props.question_helpfulness})`);
    });
  });

  // Question_Report.jsx
  describe("Question Report", () => {
    const props = {
      handleReportClick: '() -> {}',
      handleTrackingClick: '() -> {}',
    }
    const wrapper = shallow(<QuestionReport {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Report' text", () => {
      expect(wrapper.find('[element-name="Question_Report"]').text()).toContain('Report');

    });
  });

  // Question_Search_Bar.jsx
  describe("Question Search Bar", () => {
    const props = {
      questions: testQuestions.results,
      setFilter: '() -> {}',
      handleTrackingClick: '() -> {}',
      setHighlight: '() -> {}',
    }
    const wrapper = shallow(<QuestionSearchBar {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Have a question? Search for answers' text", () => {
      expect(wrapper.props().children[0].props.placeholder).toContain('Have a question? Search for answers');
    });
  });

  // Question_View.jsx
  describe("Question View", () => {
    const props = {
      question: testQuestions.results[0],
      handleTrackingClick: '() -> {}',
      highlight: '',
    }
    const wrapper = shallow(<QuestionView {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It has children", () => {
      expect(wrapper.children().length).toEqual(1);
    });
  });

  // Questions_View.jsx
  describe("Questions View", () => {
    const props = {
      questions: testQuestions.results,
      setQuestions: '() -> {}',
      filter: '',
      handleTrackingClick: '() -> {}',
      product_id: testQuestions.product_id,
      highlight: '',
    }
    const wrapper = shallow(<QuestionsView {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It has children", () => {
      expect(wrapper.children().length).toEqual(1);
    });
  });
});