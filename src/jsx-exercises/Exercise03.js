
function Exercise03() {
    // let username = "root";
    // let username = "Shoaib";
    // let username = undefined;
    // let username = null;
    let username = false;

    return (
        <>
        {username ? `Hello ${username}` : "Not logged in" }
        </>
    )
}

export default Exercise03;