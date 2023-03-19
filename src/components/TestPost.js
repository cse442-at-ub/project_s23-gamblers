import React from 'react'

export default function TestPost() {
  return (
    <div>
        <form action="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/register/" method="post" enctype="multipart/form-data">
            Name: <input type="text" name="name"/>
            E-mail: <input type="text" name="email"/>
            <input type="submit"/>
        </form>
    </div>
  )
}
