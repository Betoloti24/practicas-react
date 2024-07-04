
function THead({ head }) {
    return (
        <thead>
            <tr>
                { head && head.map((value, index) => <th scope="col" key={index}>{value}</th>) }
            </tr>
        </thead>
    )
}

export default THead;