import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Accounts = () => {
	return (
		<C.GridItem colSpan={{ base: 12, lg: 7, xl: 8 }}>
			<Card>
				<C.Stack spacing={6}>
					<C.Stack direction="row" spacing={6} align="center">
						<C.Text as="h1" fontWeight="semibold">
							Accounts
						</C.Text>

						<C.Spacer />

						<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
					</C.Stack>

					<C.TableContainer>
						<C.Table>
							<C.Thead>
								<C.Tr>
									<C.Th>Email</C.Th>
									<C.Th>Name</C.Th>
									<C.Th>Joined</C.Th>
									<C.Th>Actions</C.Th>
								</C.Tr>
							</C.Thead>

							<C.Tbody>
								{[...Array(5)].map((data, index) => (
									<C.Tr key={index}>
										<C.Td>
											<C.Stack direction="row" spacing={3} align="center">
												<C.Avatar size="sm" name="My Girl" />

												<C.Text w={148} overflow="hidden" textOverflow="ellipsis">
													mygirlmilktea@gmail.com
												</C.Text>
											</C.Stack>
										</C.Td>

										<C.Td>
											<C.Text w={148} overflow="hidden" textOverflow="ellipsis">
												Lemuel Palwa
											</C.Text>
										</C.Td>

										<C.Td>04/20/2022</C.Td>

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

												<C.IconButton colorScheme="blue" size="sm" icon={<I.CheckCircle size={14} />} />
											</C.Stack>
										</C.Td>
									</C.Tr>
								))}
							</C.Tbody>
						</C.Table>
					</C.TableContainer>
				</C.Stack>
			</Card>
		</C.GridItem>
	)
}

export default Accounts
