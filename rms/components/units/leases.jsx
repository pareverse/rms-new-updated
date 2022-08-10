import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Leases = () => {
	return (
		<Card>
			<C.Stack spacing={6}>
				<C.Stack direction="row" spacing={6} align="center">
					<C.Text as="h1" fontWeight="semibold">
						Leases
					</C.Text>

					<C.Spacer />

					<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
				</C.Stack>

				<C.TableContainer>
					<C.Table>
						<C.Thead>
							<C.Tr>
								<C.Th>Start Date</C.Th>
								<C.Th>Due Date</C.Th>
								<C.Th>Monthly</C.Th>
								<C.Th>CAMC</C.Th>
								<C.Th>VAT 12%</C.Th>
								<C.Th>Water Bill</C.Th>
								<C.Th>Total</C.Th>
								<C.Th>Action</C.Th>
							</C.Tr>
						</C.Thead>

						<C.Tbody>
							{[...Array(5)].map((data, index) => (
								<C.Tr key={index}>
									<C.Td>04/20/2022</C.Td>

									<C.Td>05/20/2022</C.Td>

									<C.Td>₱25,000.00</C.Td>

									<C.Td>₱1,800.00</C.Td>

									<C.Td>₱4,416.00</C.Td>

									<C.Td>₱4,416.16</C.Td>

									<C.Td>₱41,416.16</C.Td>

									<C.Td>
										<C.Stack direction="row" spacing={2}>
											<C.Box>
												<C.Popover>
													<C.PopoverTrigger>
														<C.IconButton size="sm" icon={<I.MoreHorizontal size={14} />} />
													</C.PopoverTrigger>

													<C.PopoverContent maxW={256}>
														<C.PopoverHeader>Actions</C.PopoverHeader>

														<C.PopoverBody p={3}>
															<C.Stack spacing={3}>
																<C.Button leftIcon={<I.UserX size={16} />}>Add to Block list</C.Button>
																<C.Button colorScheme="red" leftIcon={<I.Trash2 size={16} />}>
																	Delete this User
																</C.Button>
															</C.Stack>
														</C.PopoverBody>
													</C.PopoverContent>
												</C.Popover>
											</C.Box>
										</C.Stack>
									</C.Td>
								</C.Tr>
							))}
						</C.Tbody>
					</C.Table>
				</C.TableContainer>
			</C.Stack>
		</Card>
	)
}

export default Leases
