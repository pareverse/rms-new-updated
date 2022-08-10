import { Box } from '@chakra-ui/react'

const Card = (props) => {
	return <Box bg="bg-surface" border="1px" borderColor="border" borderRadius="lg" shadow="xs" p={6} _dark={{ shadow: 'xs-dark' }} {...props} />
}

export default Card
