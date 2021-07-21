import queryString from "query-string"

function Search(props){
  console.log(">>>>>>>>>>>>>>>>>props" , props)
  var query = queryString.parse(props.location.search)
  console.log("query object" , query)
    return (
        <div>
<h1>Search Cakes for  {query.q} </h1>
        </div>
    )
}

export default Search