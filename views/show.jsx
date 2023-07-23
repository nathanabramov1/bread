const React = require('react')
const Default = require('./layouts/default')

function Show ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default title={bread.name}>
            <h3>{bread.name}</h3>
            <h4>{bread.getBakedBy()} {bread.baker.name}</h4>
            <p>{bread.freshness()}</p>
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <p>
                and it
                {
                    bread.hasGluten
                        ? <span> does </span>
                        : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name} />

            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
            </form>

            <li><a href="/breads">Go home</a></li>
        </Default>

      )
  }
  

module.exports = Show
