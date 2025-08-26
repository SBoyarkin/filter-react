export function Toolbar({filters, selected}) {
    console.log(filters)
    console.log(selected)
    const test = filters.map((item) => <div className='toolbar__item'>{item}</div>)
    return(
        <>
            <div class='toolbar'>
                {test}
            </div>
        </>
    )

}