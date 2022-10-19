import { expect, jest, test } from '@jest/globals';
import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { testQuestions } from "./QandA.test.data.js";
import {
  AddaQuestion,
  AddanAnswer,
  AnswerHelpfulness,
  AnswerPhotos,
  AnswerReport,
  AnswerView,
  QandA,
  QuestionHelpfulness,
  QuestionReport,
  QuestionSearchBar,
  QuestionView,
  QuestionsView
} from '../src/components/Q&A'

Enzyme.configure({ adapter: new Adapter() });

describe("Question and Answers", () => {
  // Add_A_Question.jsx
  describe("Add a Question", () => {
    const minProps = {
      questions: testQuestions.results,
      setQuestions: '() -> {}',
      product_id: testQuestions.product_id,
      handleTrackingClick: '() -> {}'
    }
    const wrapper = shallow(<AddaQuestion {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add a Question' button text", () => {
      expect(wrapper.find('[element-name="Add_A_Question"]').text()).toEqual('Add a Question');
    });
  });

  // Add_An_Answer.jsx
  describe("Add an Answer", () => {
    const minProps = {
      question_id: testQuestions.results[0].question_id,
      handleTrackingClick: '() -> {}'
    }
    const wrapper = shallow(<AddanAnswer {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Add an Answer' button text", () => {
      expect(wrapper.find('[element-name="Add_Answer"]').text()).toContain('Add an Answer');
    });
  });

  // Answer_Helpfulness.jsx
  describe("Answer Helpfulness", () => {
    const minProps = {
      handleTrackingClick: '() -> {}',
      helpfulness: testQuestions.results[0].question_helpfulness,
      handleHelpfulClick: '() -> {}'
    }
    const wrapper = shallow(<AnswerHelpfulness {...minProps} />);
    test("It renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
    test("It renders 'Helpful?' text", () => {
      expect(wrapper.find('[element-name="Answer_Helpfulness"]').text()).toContain('Helpful?');
    });
  });
});