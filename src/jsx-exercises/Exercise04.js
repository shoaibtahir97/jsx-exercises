/* 1).
function testComponent() {
    return (
        <div>
            This is a testComponent
        </div>

    )
}

ERROR:
<testComponent /> is using incorrect casing. 
Use PascalCase for React components, or lowercase for HTML elements. 
*/


/* 2).
function TestComponent() {
    return (
        
            <div>
                This is a test Component
            </div>
            <div>
                This is another Test Component
            </div>
        
    )
}

ERROR: 
Adjacent JSX elements must be wrapped in an enclosing tag. 
Did you want a JSX fragment <>...</>

*/

// function TestComponent() {
//     return(
//         <>
//         [<TestComponent1/> 
//         <TestComponent2/>]
//         </>
//     )
// }


// export default TestComponent;
