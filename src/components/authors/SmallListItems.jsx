export default function SmallAuthorListItem({ author }) {
    const { name, age } = author;

    return (
        <p>Name: {name}, Age: {age}</p>
    );
}