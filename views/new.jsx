const React = require('react')
const Default = require('./layouts/default')

function New ({ message, body, bakers }) {
    return (
      <Default>
        <h2>Add a new bread</h2>
        {message ? <h4 style={{color: 'red'}}>{message}</h4> : null }
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={body? body.name:""}
            placeholder="Name your bread..."
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={body? body.image:""}
            placeholder="Provide an image URL..."
            />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
          />
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {bakers.map(baker => {
              return <option key={baker.id} value={baker.id}>{baker.name}</option>
            })}
          </select>
          <br />
          <input type="submit"/>
        </form>
        <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
        </div>
      </Default>
    )
}

module.exports = New
