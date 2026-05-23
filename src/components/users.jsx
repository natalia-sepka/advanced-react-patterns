import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUser } from "../api/userApi";
import { withAsync } from "../helpers/with-async";
import { ApiStatus } from "../constants/api-status";
import { useApiStatus } from "../api/hooks/useApiStatus";
import LazyLoader from "./lazy-loader";

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const {
    status: fetchUserStatus,
    setStatus: setFetchUserStatus,
    isIdle: isFetchUserStatusIdle,
    isPending: isFetchUserStatusPending,
    isError: isFetchUserStatusError,
    isSuccess: isFetchUserStatusSuccess,
  } = useApiStatus(ApiStatus.IDLE);

  const initFetchUsers = async () => {
    setFetchUserStatus(ApiStatus.PENDING);
    const { response, error } = await withAsync(() => fetchUser());

    if (error) {
      setFetchUserStatus(ApiStatus.ERROR);
    } else if (response) {
      setFetchUserStatus(ApiStatus.SUCCESS);
      setUsers(response);
    }

  };
  return {
    users,
    initFetchUsers,
    isFetchUserStatusIdle,
    isFetchUserStatusPending,
    isFetchUserStatusError,
    isFetchUserStatusSuccess
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
  const { users, initFetchUsers, isFetchUserStatusPending } = useFetchUsers();

  useEffect(() => {
    initFetchUsers();
  }, []);

  return (
    <Container>
      <FetchButton onClick={initFetchUsers}>
        <LazyLoader
            show={isFetchUserStatusPending} d
            elay={500}
            default={"Fetch users"}
        />
      </FetchButton>
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
