export function Toolbar({filters, selected, onSelectFilter}) {
    const btn = filters.map((item) =>
        <div className={item === selected ? "toolbar__item-active" : "toolbar__item"} onClick={() => {onSelectFilter(item)}}>
            {item}
        </div>)
    return(
        <>
            <div className='toolbar'>
                {btn}
            </div>
        </>
    )

}