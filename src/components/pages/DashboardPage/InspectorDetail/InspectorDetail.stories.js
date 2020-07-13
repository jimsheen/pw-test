import React from 'react';

import { storiesOf } from '@storybook/react';

import InspectorDetail from './InspectorDetail';

const item = {
  "division_name": "division_1",
  "area_type_name": "customer",
  "inspection_type_name": "inspection_type_1",
  "username": "Hillary Herzog",
  "score": 16,
  "id": 0,
  "answers": [{
      "question_id": 0,
      "answer": "answer 1"
    },
    {
      "question_id": 1,
      "answer": "answer 1"
    },
    {
      "question_id": 2,
      "answer": "answer 1"
    },
    {
      "question_id": 3,
      "answer": "answer 1"
    }
  ]
};

const questions = [{
    "id": 0,
    "question": "Question 0",
    "answers": [
      "answer 1",
      "answer 2",
      "answer 3"
    ]
  },
  {
    "id": 1,
    "question": "Question 1",
    "answers": [
      "answer 1",
      "answer 2",
      "answer 3"
    ]
  },
  {
    "id": 2,
    "question": "Question 2",
    "answers": [
      "answer 1",
      "answer 2",
      "answer 3"
    ]
  },
  {
    "id": 3,
    "question": "Question 3",
    "answers": [
      "answer 1",
      "answer 2",
      "answer 3"
    ]
  }
];

const props = {
  item,
  questions,
  isLoading: false,
};

storiesOf('pages.DashboardPage.InspectorDetail', module)
  .add('default', () => <InspectorDetail />)
  .add('isLoading', () => <InspectorDetail isLoading={true} />)
  .add('with item', () => <InspectorDetail { ...props } />)
