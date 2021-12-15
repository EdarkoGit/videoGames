export const renderMapToArray= (array)=>{
  return array.map((element,i)=>{
    if (i===array.length-1) {
      return <span key={element}> {element}. </span>
    }
    return <span key={element}> {element}, </span>
  })
}
export const renderBoxOfChexbox= (array)=>{
  return (
    <div>
      {
        array.map(element=><input type='checkbox' key={element.id}>{element.name}</input>)
      }
    </div>
  )
}