import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Overview = () => {
	return (
		<Card>
			<C.Stack spacing={6}>
				<C.Stack direction="row" spacing={6} align="center">
					<C.Text as="h1" fontWeight="semibold">
						Overview
					</C.Text>

					<C.Spacer />

					<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
				</C.Stack>

				<C.Box>
					<C.SimpleGrid columns={4} spacing={6}>
						<C.FormControl>
							<C.FormLabel>Unit ID</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Unit Number</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Monthly Rent</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Balance</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Company</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Email</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Status</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>

						<C.FormControl>
							<C.FormLabel>Created</C.FormLabel>

							<C.Input value="00000" _disabled={{ opacity: 1 }} disabled />
						</C.FormControl>
					</C.SimpleGrid>
				</C.Box>
			</C.Stack>
		</Card>
	)
}

export default Overview
