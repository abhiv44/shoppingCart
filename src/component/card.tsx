import * as React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'
interface CardListProps {
	img_url?: any
	price?: any
	name?: any
	k?: any
	category?: any
	discount?: any
	cardClick?: any
}
const styles = theme => ({
	button: {
		margin: theme.spacing.unit
	},
});
type PropsWithStyles = WithStyles<"button">

class CardsList extends React.Component<CardListProps & PropsWithStyles>{
	cardClick = (e) => {
		this.props.cardClick(e)
	}
	render() {
		const { img_url, price, name, k, category, discount, cardClick, classes } = this.props
		return (
			<article key={k} className="br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l ma1">
				<img src={img_url} className="db w-100 br2 br--top" alt={name} />
				<div className="pa2 ph3-ns pb3-ns">
					<div className="dt w-100 mt1">
						<div className="dtc">
							<h1 className="f5 f4-ns mv0">Name: {name}</h1>
							<h3 className="f5 f4-ns mv0">Category: {category}</h3>
						</div>
						<div className="dtc tr">
							<h2 className="f5 mv0">Price: ₹ {price}</h2>
							<h3 className="f5 mv0"> Discount: ₹ {discount}</h3>
						</div>
						<div>
						</div>
					</div>
				</div>
				<Button className={classes.button} onClick={this.cardClick} color='primary' variant='contained'>Add to cart</Button>
			</article>
		)
	}
}

export default (withStyles(styles, { withTheme: true })(CardsList))