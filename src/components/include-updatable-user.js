import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config/config";

export const includeUpdatableUser = (Component, userId) => {
    return props => {
        const [initialUser, setInitialUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`${BASE_URL}users/${userId}`);
                setInitialUser(response.data);
                setUser(response.data);
            })()
        }, [])

        const onChangeUser = updates => {
            setUser({...user, ...updates});
        };

        const onPostUser = async () => {
            const response = await axios.post(`${BASE_URL}users/${userId}`, {
                user
            });
            setInitialUser(response.data);
            setUser(response.data);
        };

        const onResetUser = () => {
            setUser(initialUser);
        }

        return <Component
            {...props}
            user={user}
            onChangeUser={onChangeUser}
            onPostUser={onPostUser}
            onResetUser={onResetUser}
        />
    }
}