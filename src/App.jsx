import React from 'react';

import Example from './withToggler'
// import Menu from "./Menu"
// import Favorite from "./Favorite"

// function App() {
//     return (
//         <div>
//             <Menu />
//             <hr />
//             <Favorite />
//         </div>
//     )
// }

// export default App;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function App() {
    return (
        <>
            <Example render={
                function(answer) {
                    return (
                        <h1>{answer=== 'yes' ? 'we are happy' : 'we are sad'}</h1>
                    )
                }
            }/>
        </>
    )
}

export default App