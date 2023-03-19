import React from "react";
import {Link} from "react-router-dom";



const TODOItem = ({todo, deleteTODO}) => {

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
            <td>
              <button onClick={()=>deleteTODO(todo.id)} type='button'>Delete</button>
            </td>
        </tr>
    )
}

const TODOList = ({todo, deleteTODO}) => {

    return(
        <div>
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
              <th></th>
              {todo.map((todo) => <TODOItem todo={todo} deleteTODO={deleteTODO}/>)}
          </table>
          <Link to='/todo/create'>Create</Link>
        </div>
    )

}

export default TODOList
