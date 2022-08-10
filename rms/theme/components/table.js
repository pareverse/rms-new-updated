import { mode, transparentize } from '@chakra-ui/theme-tools'

const baseStyle = {
	table: {
		bg: 'bg-surface',
		whiteSpace: 'nowrap'
	},
	th: {
		fontWeight: 'semibold',
		textTransform: 'normal',
		letterSpacing: 'normal',
		borderTopWidth: '1px',
		whiteSpace: 'nowrap'
	},
	tbody: {
		td: {
			border: 'none',
			fontSize: 'xs',
			fontWeight: 'medium'
		}
	}
}

const variants = {
	simple: (props) => ({
		th: {
			color: 'muted',
			bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props)
		}
	}),
	striped: (props) => ({
		th: {
			color: 'muted',
			borderBottomWidth: '0px'
		},
		thead: {
			'th,td': {
				borderWidth: '0px'
			}
		},
		tbody: {
			tr: {
				'th,td': {
					borderWidth: '0px'
				},
				'&:last-of-type': {
					'th, td': {
						borderBottomWidth: '1px'
					}
				},
				'&:nth-of-type(odd)': {
					'th, td': {
						borderBottomWidth: '0px'
					},
					td: {
						bg: mode('gray.50', transparentize('gray.700', 0.4)(props.theme))(props)
					}
				}
			}
		}
	})
}

const sizes = {
	md: {
		th: {
			lineHeight: '1.25rem'
		},
		td: {
			fontSize: 'sm'
		}
	}
}

export default {
	sizes,
	baseStyle,
	variants
}
