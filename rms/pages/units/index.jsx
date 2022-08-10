import Head from 'next/head'
import NextLink from 'next/link'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Units = () => {
	return (
		<>
			<Head>
				<title>Units</title>
			</Head>

			<C.Container py={6}>
				<Card>
					<C.Stack spacing={6}>
						<C.Stack direction="row" spacing={6} align="center">
							<C.Text as="h1" fontWeight="semibold">
								Units
							</C.Text>

							<C.Spacer />

							<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
						</C.Stack>

						<C.TableContainer>
							<C.Table>
								<C.Thead>
									<C.Tr>
										<C.Th>Company</C.Th>
										<C.Th>Tenant</C.Th>
										<C.Th>Unit</C.Th>
										<C.Th>Monthly</C.Th>
										<C.Th>Balance</C.Th>
										<C.Th>Status</C.Th>
										<C.Th>Created</C.Th>
										<C.Th>Action</C.Th>
									</C.Tr>
								</C.Thead>

								<C.Tbody>
									{[...Array(5)].map((data, index) => (
										<C.Tr key={index}>
											<C.Td>
												<C.Stack direction="row" spacing={3} align="center">
													<C.Avatar size="sm" name="My Girl" />

													<C.Text w={148} overflow="hidden" textOverflow="ellipsis">
														My Girl Milk Tea
													</C.Text>
												</C.Stack>
											</C.Td>

											<C.Td>
												<C.Text w={148} overflow="hidden" textOverflow="ellipsis">
													Lemuel Palwa
												</C.Text>
											</C.Td>

											<C.Td>110</C.Td>

											<C.Td>₱25,000</C.Td>

											<C.Td>₱0</C.Td>

											<C.Td>
												<C.Badge colorScheme="blue" size="sm">
													Occupied
												</C.Badge>
											</C.Td>

											<C.Td>June 2022</C.Td>

											<C.Td>
												<NextLink href="/units/1" passHref>
													<C.IconButton size="sm" icon={<I.Eye size={14} />} />
												</NextLink>
											</C.Td>
										</C.Tr>
									))}
								</C.Tbody>
							</C.Table>
						</C.TableContainer>
					</C.Stack>
				</Card>
			</C.Container>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			props: {}
		}
	} else {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			},

			props: {}
		}
	}
}

export default Units
