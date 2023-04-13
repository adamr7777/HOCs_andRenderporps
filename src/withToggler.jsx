import React, {Component} from "react"


// class Toggler extends Component {
//     state = {
//         on: this.props.optionsObj.defaultValue
//     }
    
//     toggle = () => {
//         this.setState(prevState => {
//             return {
//                 on: !prevState.on
//             }
//         })
//     }
    
//     render() {
//         const Component = this.props.component
//         return (
//             <Component on={this.state.on} toggle={this.toggle} {...this.props} />
//         )
//     }
// }

// export function withToggler(component, optionsObj) {
//     return function(props) {
//         return (
//             <Toggler optionsObj={optionsObj} component={component} {...props}/>
//         )
//     }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Example(props) {
    const [answer, setAnswer] = React.useState('no');

    return (
        <>
           {props.render(answer)}
        </>
    )
}

export default Example