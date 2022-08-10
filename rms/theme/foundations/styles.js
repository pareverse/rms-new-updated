import { mode } from '@chakra-ui/theme-tools'

export default {
	global: (props) => ({
		body: {
			color: 'default',
			bg: 'hsl(220, 100%, 98%)',
			_dark: {
				bg: 'bg-canvas'
			}
		},

		'*::placeholder': {
			opacity: 1,
			color: 'muted'
		},

		'*, *::before, &::after': {
			borderColor: mode('gray.200', 'gray.700')(props)
		}
	})
}
