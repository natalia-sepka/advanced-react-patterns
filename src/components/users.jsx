import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUser } from "../api/userApi";
import { withAsync } from "../helpers/with-async";

const ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [fetchUserStatus, setFetchUserStatus] = useState("IDLE");
  const initFetchUsers = async () => {
    setFetchUserStatus("PENDING");
    const { response, error } = await withAsync(() => fetchUser());

    if (error) {
      setFetchUserStatus("ERROR");
    } else if (response) {
      setFetchUserStatus("SUCCESS");
      setUsers(response);
    }

  };
  return {
    users,
    initFetchUsers,
    fetchUserStatus
  };
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

function Users() {
  const { users, fetchUserStatus, initFetchUsers } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>{fetchUserStatus === "PENDING" ? "Loading..." : "Fetch Users"}</FetchButton>
      <FlexContainer>
        <ContentContainer>
          {users
            ? users.map((user, index) => (
                <React.Fragment key={index}>
                  <UserName>{user.name}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                </React.Fragment>
              ))
            : null}
        </ContentContainer>
      </FlexContainer>
    </Container>
  );
}
export default Users;
