import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Activities = () => {
	return (
		<C.GridItem colSpan={{ base: 12, lg: 5, xl: 4 }}>
			<Card h="full">
				<C.Stack spacing={6}>
					<C.Stack direction="row" spacing={6} align="center">
						<C.Text as="h1" fontWeight="semibold">
							Activities
						</C.Text>

						<C.Spacer />

						<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
					</C.Stack>

					<C.Box>
						{[...Array(4)].map((value, index) => (
							<C.Stack direction="row" spacing={3} cursor="pointer" key={index}>
								<C.Box>
									<C.Flex bg="hsl(220, 100%, 50%, 5%)" justify="center" align="center" borderRadius="full" h={10} w={10} color="blue.500" _dark={{ color: 'blue.200' }}>
										<I.Check size={16} />
									</C.Flex>

									<C.Flex h={12} justify="center">
										<C.Divider orientation="vertical" />
									</C.Flex>
								</C.Box>

								<C.Stack spacing={2} w="full">
									<C.Stack direction="row">
										<C.Text as="h1" fontSize="sm" fontWeight="semibold">
											Task Finished!
										</C.Text>

										<C.Spacer />

										<C.Text as="h1" fontSize="xs" fontWeight="medium" color="muted">
											July 1, 2022
										</C.Text>
									</C.Stack>

									<C.Text fontSize="xs" fontWeight="medium" color="muted" noOfLines={2}>
										<C.chakra.span fontWeight="semibold" color="blue.500" _dark={{ color: 'blue.200' }}>
											Tan
										</C.chakra.span>
										, Accepted payments of My Girl Milk Tea
									</C.Text>
								</C.Stack>
							</C.Stack>
						))}
					</C.Box>
				</C.Stack>
			</Card>
		</C.GridItem>
	)
}

export default Activities
