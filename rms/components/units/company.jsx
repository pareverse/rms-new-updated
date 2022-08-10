import * as C from '@chakra-ui/react'
import Card from 'components/card'

const Company = () => {
	return (
		<Card>
			<C.Stack align="center" spacing={3} p={6}>
				<C.Avatar name="My Girl" size="xl" />

				<C.Stack spacing={1}>
					<C.Text fontWeight="semibold" textAlign="center" noOfLines={1}>
						My Girl Milk Tea
					</C.Text>

					<C.Text fontSize="xs" fontWeight="medium" textAlign="center" color="muted" noOfLines={1}>
						mygirlmilktea@gmail.com
					</C.Text>
				</C.Stack>
			</C.Stack>
		</Card>
	)
}

export default Company
