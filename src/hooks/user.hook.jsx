import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

export const useUser = (userId) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${BASE_URL}users/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);

    return user;
}