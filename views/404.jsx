const React = require('react')
const Default = require('./layouts/default')

function FourOhFour () {
    return (
        <Default title="404 page">
            <h1>404: Not found</h1>
            <h2>We don't have this bread!</h2>
        </Default>
    )
}

module.exports=FourOhFour