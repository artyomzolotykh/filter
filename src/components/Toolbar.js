let Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className='toggles'>
      {filters.map(filter => 
        <div className={filter === selected ? 'active toggle' : 'toggle'} onClick={() => onSelectFilter(filter)}>{filter}</div>
      )}
    </div>
  )
}

export default Toolbar;