const React = require('react')
const Default = require('./layouts/default')

function New ({ message, body }) {
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
            <option value="Rachel">Rachel</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Chandler">Chandler</option>
            <option value="Ross">Ross</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Elaine">Elaine</option>
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
