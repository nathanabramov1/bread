const React = require('react')
const Default = require('./layouts/default')

function Edit ({bakers, bread, message}) {
    return (
      <Default>
        <h2>Edit a bread: {bread.name}</h2>
        {message ? <h4 style={{color: 'red'}}>{message}</h4> : null }
        <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name ? bread.name : ""}
            placeholder="Name your bread..."
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.image ? bread.image : ""}
            placeholder="Provide an image URL..."
          />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker" defaultValue={bread.baker.id}>
            {bakers.map(baker => {
              return <option key={baker.id} value={baker.id}>{baker.name}</option>
            })}
          </select>
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports=Edit
