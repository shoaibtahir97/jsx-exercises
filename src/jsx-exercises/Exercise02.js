
function Exercise02() {
    return (
        <>
            <div className="single-line">
                NewLine
                Test
            </div>

            <div className="empty-newLine">
                Empty

                NewLine

                Here
            </div>

            <div className="spaces-with-new-lines">
                &nbsp;Non-breaking
                &nbsp;Space&nbsp;
            </div>

            <div>
                Line1
                {" "}
                Line2
            </div>
        </>
    )
}

export default Exercise02;