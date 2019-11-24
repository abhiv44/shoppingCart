import * as React from "react";
import Main from './routes/main';
import { connect } from "react-redux";
interface AppProp {
    api?: any
    dispatch?: any
    history?: any
}
class App extends React.Component<AppProp> {
    h = () => {
        this.props.history && this.props.history.push('/sa')
    }
    render() {
        console.log(this.props.history)
        const { addTOCart } = this.props.api
        console.log(addTOCart, 'addTOCart')
        const cartlength = (addTOCart || []).length
        return (
            <div>

                <Main />
            </div>
        )
    }
}
function mapStatetoProps(state) {
    return {
        api: state.fetchApi
    }
}
export default connect(mapStatetoProps)(App)
