import Head from 'next/head'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import Company from 'components/units/company'
import Tenant from 'components/units/tenant'
import Contacts from 'components/units/contacts'
import Overview from 'components/units/overview'
import Leases from 'components/units/leases'
import Payments from 'components/units/payments'

const UnitId = () => {
	return (
		<>
			<Head>
				<title>Units - Company name</title>
			</Head>

			<C.Container py={6}>
				<C.SimpleGrid templateColumns="repeat(12, 1fr)" gap={6}>
					<C.GridItem colSpan={3}>
						<C.Stack position="sticky" top={88} spacing={6}>
							<Company />
							<Tenant />
							<Contacts />
						</C.Stack>
					</C.GridItem>

					<C.GridItem colSpan={9}>
						<C.Stack spacing={6}>
							<Overview />
							<Leases />
							<Payments />
						</C.Stack>
					</C.GridItem>
				</C.SimpleGrid>
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

export default UnitId
