
export default function CatList(props) {
  const {cats, setActive, active} = props
  return (
    <ul className="nav nav-tabs mb-3" role="tablist">
      <li className="nav-item" role="presentation">
        <button 
        className={`nav-link ${active ? '':"active"}`}
        type="button" 
        role="tab"
        onClick={()=>setActive('')}
        >
          All
        </button>
      </li>
      {cats.map(cat=> {
      return(
        <li key={cat} className="nav-item" role="presentation">
          <button 
          className={`nav-link ${active == cat ? 'active':""}`} 
          type="button" 
          role="tab"
          onClick={()=>setActive(cat)}
          >
            {cat}
          </button>
        </li>
      )
    })}
    </ul>
  )
}
