import * as React from "react";
import { AppState } from '../features/redux/state/appState'
import { connect } from "react-redux";
import { addToCartAction } from '../features/redux/action/userAuth'
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
interface dashBoardProps {
  dashboard?: any
  dispatch?: any
  api?: any
}
class UserDashBoard extends React.Component<dashBoardProps>{
  render() {
    const { addTOCart } = this.props.api
    const cartlength = (addTOCart || []).length
    const totalPrice = (addTOCart || []).reduce((a, b) => { return a + b.price }, 0)
    const discountPrice = (addTOCart || []).reduce((a, b) => { return a + b.discount }, 0)
    const aa = (addTOCart || []).map((e, i) => {
      return <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td><img
          src={e.img_url}
          className="br-100 h3 w3 dib" alt="avatar" /></td>
        <td>{e.price}</td>
        <td>{e.discount}</td>
      </tr>
    })
    return (
      <div>
        <header className="sans-serif w-100 fixed">
          <div className="cover bg-left bg-center-l">
            <div className="bg-light-blue">
              <nav className="dt w-100 mw8 center">
                <div className="dtc v-mid tr pa3">
                  <IconButton color="inherit">
                    <Badge badgeContent={cartlength} color="secondary">
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className="pa4">
          <h1 className="pl6 pb3 pt4">Checkout</h1>
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center">
              <thead>
                <tr>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Name</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Image</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Price</th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Discount</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {aa}
              </tbody>
            </table>
            <h4>Total Price: {totalPrice}, Discount: {discountPrice}</h4>
            <h3>
              Amount Payable: {totalPrice - discountPrice}
            </h3>
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
export default connect(mapStatetoProps)(UserDashBoard)