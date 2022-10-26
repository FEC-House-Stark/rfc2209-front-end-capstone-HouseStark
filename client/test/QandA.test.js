import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testQuestions } from "./QandA.test.data.js";
import {
  AddanAnswer,
  AddaQuestion,
  AddaQuestionModal,
  AddanAnswerModal,
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
} from '../src/components/QandA/components'
import { useState } from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe("Question and Answers", () => {
  // QandA.jsx
  describe("QandA", () => {
    const props = {
      product_id: testQuestions.product_id,
      handleClick: jest.fn(),
      productInfo: testQuestions.productInfo
    }
    const wrapper = shallow(<QandA {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
  });

  // Add_A_Question_Modal.jsx
  describe("Add a Question Modal", () => {
    const props = {
      product_id: testQuestions.product_id,
      productInfo: testQuestions.productInfo,
      openModal: true,
      setIsOpen: jest.fn()
    }
    const wrapper = shallow(<AddaQuestionModal {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It shows the close modal button", () => {
      const closeModalButton = wrapper.props().children.props.children[0].props.children.props
      expect(closeModalButton['element-name']).toBe('Add_A_Question_Modal_Close')
    })
    test("It closes when clicked", () => {
      wrapper.find("[element-name='Add_A_Question_Modal_Close']").simulate('click')
      expect(props.setIsOpen).toHaveBeenCalled()
    })
    test("It handles text input", () => {
      wrapper.find("[placeholder='Your Question ...']").simulate('change', { target: { value: 'test' }})
      wrapper.find("[name='name']").simulate('change', { target: { value: 'test' }})
      wrapper.find("[type='email']").simulate('change', { target: { value: 'test' }})
    })
    test("It handles submission", () => {
      wrapper.find("[element-name='Add_A_Question_Submit']").simulate('click')
    })
  });

  // Add_A_Question.jsx
  describe("Add a Question", () => {
    const props = {
      questions: testQuestions.results,
      setQuestions: '() -> {}',
      product_id: testQuestions.product_id,
      productInfo: testQuestions.productInfo,
      handleTrackingClick: jest.fn()
    }
    const wrapper = shallow(<AddaQuestion {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add a Question' button text", () => {
      expect(wrapper.find('[element-name="Add_A_Question"]').text()).toContain('Add a Question');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="Add_A_Question"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
  });

  // Add_An_Answer_Modal.jsx
  describe("Add an Answer Modal", () => {
    const props = {
      handleTrackingClick: jest.fn(),
      question_id: testQuestions.results[0].question_id,
      openModal: true,
      setIsOpen: jest.fn(),
    }
    const wrapper = shallow(<AddanAnswerModal {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It closes when clicked", () => {
      wrapper.find("[element-name='Add_Answer_Modal_Close']").simulate('click')
      expect(props.setIsOpen).toHaveBeenCalled()
    });
    test("It handles text input", () => {
      wrapper.find("[name='Answer']").simulate('change', { target: { value: 'test' }})
      wrapper.find("[name='Name']").simulate('change', { target: { value: 'test' }})
      wrapper.find("[name='Email']").simulate('change', { target: { value: 'test' }})
      wrapper.find("[type='url']").simulate('change', { target: { value: 'test' }})
    })
  });

  // Add_An_Answer.jsx
  describe("Add an Answer", () => {
    const props = {
      question_id: testQuestions.results[0].question_id,
      handleTrackingClick: jest.fn()
    }
    const wrapper = shallow(<AddanAnswer {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add an Answer' button text", () => {
      expect(wrapper.find('[element-name="Add_Answer"]').text()).toContain('Add an Answer');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="Add_Answer"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
  });

  // Answer_Helpfulness.jsx
  describe("Answer Helpfulness", () => {
    const props = {
      handleTrackingClick: jest.fn(),
      helpfulness: testQuestions.results[0].question_helpfulness,
      handleHelpfulClick: jest.fn()
    }
    const wrapper = shallow(<AnswerHelpfulness {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Helpful?' text", () => {
      expect(wrapper.find('[element-name="Answer_Helpfulness"]').text()).toContain('Helpful?');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="Answer_Helpfulness"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
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
      handleReportClick: jest.fn(),
      handleTrackingClick: jest.fn(),
    }
    const wrapper = shallow(<AnswerReport {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Report' text", () => {
      expect(wrapper.find('[element-name="Answer_Report"]').text()).toContain('Report');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="Answer_Report"]').simulate('click', { preventDefault: jest.fn() })
      wrapper.find('[element-name="Answer_Report"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
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
      handleTrackingClick: jest.fn(),
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
      handleMoreQuestion: jest.fn(),
      handleLessQuestion: jest.fn(),
      handleTrackingClick: jest.fn(),
      moreQuestions: false,
    }
    const wrapper = shallow(<MoreQuestionsButton {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'More Answered Questions' text", () => {
      expect(wrapper.find('[element-name="More_Questions"]').text()).toContain('More Answered Questions');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="More_Questions"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
  });

  // Question_Helpfulness.jsx
  describe("Question Helpfulness", () => {
    const props = {
      handleTrackingClick: jest.fn(),
      handleHelpfulClick: jest.fn(),
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
    test("Its clickable", () => {
      wrapper.find('[element-name="Question_Helpfulness"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
  });

  // Question_Report.jsx
  describe("Question Report", () => {
    const props = {
      handleReportClick: jest.fn(),
      handleTrackingClick: jest.fn(),
    }
    const wrapper = shallow(<QuestionReport {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Report' text", () => {
      expect(wrapper.find('[element-name="Question_Report"]').text()).toContain('Report');
    });
    test("Its clickable", () => {
      wrapper.find('[element-name="Question_Report"]').simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
  });

  // Question_Search_Bar.jsx
  describe("Question Search Bar", () => {
    const props = {
      questions: testQuestions.results,
      setFilter: jest.fn(),
      handleTrackingClick: jest.fn(),
      setHighlight: jest.fn(),
    }
    const wrapper = shallow(<QuestionSearchBar {...props}/>);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Have a question? Search for answers' text", () => {
      expect(wrapper.props().children[0].props.placeholder).toContain('Have a question? Search for answers');
    });
    test("Its clickable", () => {
      wrapper.find("[element-name='Question_Search_Bar']").simulate('click', { preventDefault: jest.fn() })
      expect(props.handleTrackingClick).toHaveBeenCalled()
    })
    test("It can handle text input", () => {
      wrapper.find("[element-name='Question_Search_Bar']").simulate('change', { target: { value: 'test' } })
      expect(props.setFilter).toHaveBeenCalled()
    })
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