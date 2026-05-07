import { Component, useEffect, useState } from "react";
import axios from "axios";

export const includeUser = (Component, userId) => {
    return props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`http://localhost:9090/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <Component {...props} user={user} />
    };
}