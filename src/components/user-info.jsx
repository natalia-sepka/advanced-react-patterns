import { useDataSource } from "../hooks/data-source.hook";
import { BASE_URL } from "../config/config";
import { useCallback } from "react";
import axios from "axios";

const fetchFromServer = (resourceUrl) => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

export const UserInfo = ({ userId }) => {
    const fetchUser = useCallback(fetchFromServer(`${BASE_URL}users/${userId}`), [userId]);
    const user = useDataSource(fetchUser);
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Books</h2>
            <ul>
                {books.map((book) => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
        </>
    ) : (
        <h1>Loading...</h1>
    );
}