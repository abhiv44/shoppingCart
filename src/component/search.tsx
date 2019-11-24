import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
const styles = theme => ({
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '100%'
	},
	button: {
		margin: theme.spacing.unit
	},
});
type PropsWithStyles = WithStyles<"textField" | "button">;
interface SearchBoxProps {
	handleChange?: any
	handleClick?: any
	searchValue?: any
}
class SearchBox extends React.Component<PropsWithStyles & SearchBoxProps> {
	handleOnChange = (e) => {
		this.props.handleChange(e)
	}
	handleClick = () => {
		this.props.handleClick()
	}
	render() {
		const { searchValue } = this.props
		return (
			<div className="mw6-ns center mt5 pa2 ">
				<div className='flex'>
					<TextField value={searchValue} onChange={this.handleOnChange} placeholder='Search Product by name here...' className={this.props.classes.textField} />
					<Button onClick={this.handleClick} className={this.props.classes.button} variant="contained" color='primary'><SearchIcon />Search</Button>
				</div>
			</div>
		)
	}
}
export default (withStyles(styles, { withTheme: true })(SearchBox))