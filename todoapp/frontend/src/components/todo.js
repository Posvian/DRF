import React from "react";



const TODOItem = ({todo}) => {

    return(
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.create}
            </td>
            <td>
                {todo.update}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.active}
            </td>
        </tr>
    )
}

const TODOList = ({todo}) => {

    return(
        <table>
            <th>
                Project
            </th>
            <th>
                Text
            </th>
            <th>
                Create date
            </th>
            <th>
                Update date
            </th>
            <th>
                User
            </th>
            <th>
                Is active
            </th>
            {todo.map((todo) => <TODOItem todo={todo}/>)}
        </table>
    )

}

export default TODOList
