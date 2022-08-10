import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Tenant = () => {
	return (
		<Card>
			<C.Stack spacing={6}>
				<C.Stack direction="row" spacing={6} align="center">
					<C.Text as="h1" fontWeight="semibold">
						Tenant
					</C.Text>

					<C.Spacer />

					<C.IconButton variant="ghost" icon={<I.MoreVertical size={16} />} />
				</C.Stack>
			</C.Stack>
		</Card>
	)
}

export default Tenant
