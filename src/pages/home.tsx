import * as React from "react";
import { withStyles, WithStyles } from '@material-ui/core/styles'
import { connect } from "react-redux";
import { fetchApiAction, addToCartAction } from '../features/redux/action/userAuth'
import SearchBox from '../component/search'
import CardList from '../component/card'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  paperStyle: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit
  },
});
type PropsWithStyles = WithStyles<"paperStyle" | "textField" | "button">;

interface loginProps {
  user?: any
  dispatch?: any
  history?: any
  api?: any
}
class Home extends React.Component<loginProps & PropsWithStyles>{
  state = {
    searchValue: ''
  }
  componentDidMount() {
    this.props.dispatch(fetchApiAction('', ''))
  }
  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  handleSelect = (e) => {
    this.props.dispatch(fetchApiAction('', e.target.value))
  }
  h = () => {
    this.props.history.push('/checkout')
  }
  handleClick = () => {
    this.props.dispatch(fetchApiAction(this.state.searchValue, ''))
  }
  handleCard = (e) => {
    this.props.dispatch(addToCartAction(e))
  }
  render() {
    const { searchValue } = this.state
    const { data, addTOCart } = this.props.api
    const cartlength = (addTOCart || []).length
    const listitem = (data || []).map((e, i) => {
      return <CardList
        cardClick={() => this.handleCard(e)}
        name={e.name}
        price={e.price}
        img_url={e.img_url}
        k={i}
        discount={e.discount}
        category={e.category} />
    })
    return (
      <div>
        <header className="sans-serif w-100 fixed">
          <div className="cover bg-left bg-center-l">
            <div className="bg-light-blue">
              <nav className="dt w-100 mw8 center">
                <div className="dtc v-mid tr pa3">
                  <IconButton onClick={cartlength > 0 && this.h} color="inherit">
                    <Badge badgeContent={cartlength} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </div>
              </nav>
            </div>
          </div>
        </header>
        item in Cart {(addTOCart || []).length}
        <SearchBox handleChange={this.handleChange} searchValue={searchValue} handleClick={this.handleClick} />
        <div className='flex'>
          <div className='w-20-ns w-100'>
            <h3 onClick={this.h}>Filters</h3>
            <select onChange={this.handleSelect}>
              <option value=''>Price Filter</option>
              <option value={-1}>High to Low</option>
              <option value={1}>Low to High</option>
            </select>
          </div>
          <div className='w-80-ns w-100'>
            <div className='flex flex-wrap'>
              {listitem}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStatetoProps(state) {
  return {
    api: state.fetchApi
  }
}
export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(Home))