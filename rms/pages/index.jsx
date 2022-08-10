import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'

const Home = () => {
	return (
		<>
			<Head>
				<title>TSVJ Center</title>
			</Head>

			<C.Container py={6}>Home</C.Container>
		</>
	)
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			redirect: {
				permanent: false,
				destination: '/dashboard'
			},
			props: {}
		}
	} else {
		return {
			props: {}
		}
	}
}

export default Home
