import React from "react"
import { connect } from "frontity"

const List = ({ state }) =>{
    const data = state.source.get(state.router.link)
    console.log(data)

    return(
        <>
            {data.items.map((item) => {
                return (
                    <div key={item.id}>
                        {item.type} - {item.id} - {item.link}
                    </div>
                )
            })}
        </>

    )
}

export default connect(List)