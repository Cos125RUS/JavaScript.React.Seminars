export default function renderItem(item, key) {
    return <li key={key} style={item.style}>{item.content}</li>;
}