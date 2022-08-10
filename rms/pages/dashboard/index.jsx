import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import Statistics from 'components/dashboard/statistics'
import Transactions from 'components/dashboard/transactions'
import Accounts from 'components/dashboard/accounts'
import Activities from 'components/dashboard/activities'

const Dashboard = () => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<C.Container py={6}>
				<C.Grid templateColumns="repeat(12, 1fr)" gap={6}>
					<Statistics />
					<Transactions />
					<Accounts />
					<Activities />
				</C.Grid>
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
				destination: '/'
			},

			props: {}
		}
	}
}

export default Dashboard
