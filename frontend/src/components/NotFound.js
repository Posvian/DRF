import React from "react";

const NotFound404 = ({location}) => {
  return (
      <div>
        <h1>Страница по адресу `{location.pathname}`не найдена или находится в разработке</h1>
      </div>
  )
}

export default NotFound404