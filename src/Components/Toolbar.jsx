export function Toolbar({filters, selected, onSelectFilter}) {
    const test = filters.map((item) =>
        <div className='toolbar__item' onClick={() =>onSelectFilter(item)}>{item}</div>)
    return(
        <>
            <div class='toolbar'>
                {test}
            </div>
        </>
    )

}