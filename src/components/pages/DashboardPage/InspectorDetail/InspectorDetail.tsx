import React from 'react';
import { isEmpty, find } from 'lodash';
import {
	Text,
	Box,
	Flex,
} from 'rebass';

import LoadingSpinner from 'components/ui/LoadingSpinner';

type InspectorDetailTypes = {
	item: any,
	questions: any[],
	isLoading: any,
};

const InspectorDetail: React.FC<InspectorDetailTypes> = ({
	item,
	isLoading,
	questions
}) => {
	if (isLoading) return <LoadingSpinner />;
	if (!isEmpty(item)) {

		const {
			score,
			username,
			answers,
		} = item;

		return (
			<Box>
				<Text as="h1" mb={2}>User: {username}</Text>
				<Text as="h2" mb={3}>Score: {score}</Text>

				<Text mb={2} fontWeight="bold" as="h3">Questions</Text>
				{!isLoading && !isEmpty(questions) &&
					<Flex>
						{answers.map((userAnswer: { question_id: number, answer: string }) => {
							const question = find(questions, { id: userAnswer.question_id });
							if (!question) return null;
							return (
								<Box
									mb={2} 
									pb={2}
									width={[1, 1/2]}
								>
									<Text
										fontWeight="bold"
										mb={1}
										pb={1}
										sx={{
											borderBottom: '1px solid lightgray',
										}}
									>
										{question.question}
									</Text>
										{question.answers.map((answer: string, index: number) => {
											if (answer === userAnswer.answer) {
												return <Text fontWeight="bold">{userAnswer.answer}</Text>
											} else {
												return <Text>{answer}</Text>
											}
										})}
								</Box>
							)
						})}
					</Flex>
				}
			</Box>
		)
	}
	return null;
};

export default InspectorDetail;
