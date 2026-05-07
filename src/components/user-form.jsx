import { includeUpdatableResource } from "./include-updatable-resource";

export const UserInfoForm = includeUpdatableResource(({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};
    return user ? (
        <>
            <label>Name:
                <input
                    value={name}
                    onChange={e => onChangeUser({name: e.target.value})} />
            </label>
            <label>Age:
                <input
                    type="number"
                    value={age}
                    onChange={e => onChangeUser({age: Number(e.target.value)})} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onPostUser}>Save</button>
        </>
    ) : <h3>Loading...</h3>
},  `http://localhost:9090/users/3`, "user");