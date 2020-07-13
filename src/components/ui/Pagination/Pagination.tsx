import React from 'react';
import {
	Flex,
	Button,
	Box,
	Text,
} from 'rebass';

type PaginationTypes = {
	currentPage: number,
	totalPages: number,
	onPageChange: (page: number) => void,
}

const Pagination: React.FC < PaginationTypes > = ({
	totalPages,
	currentPage,
	onPageChange,
}) => {

	return (
		<>
			<Flex
				width={1} 
				justifyContent="center"
				pt={3}
				mx={-2}
			>
				{currentPage > 1 &&
					<Box px={2}>
						<Button onClick={() => onPageChange(currentPage - 1)}>Previous</Button>
					</Box>
				}
					{currentPage < totalPages &&
						<Box px={2}>
							<Button onClick={() => onPageChange(currentPage + 1)}>Next</Button>
						</Box>
					}
			</Flex>
			<Flex justifyContent="center" mt={2}>
				<Text>Page {currentPage} of {totalPages}</Text>
			</Flex>
		</>
	)
}

export default Pagination
