const List = ({items, renderItem}) => {
    return (
        <ul>
            {items.map((item, index) => (renderItem(item, index)))}
        </ul>
    );
}

export default List;