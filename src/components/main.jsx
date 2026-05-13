import { Suspense } from "react";
import { useLoaderData, Await } from "react-router";
import { MainContainer, MainHeading } from "./styled-elements";
import delay from "../util/delay";

const Main = () => {
  const { data } = useLoaderData();

  return (
      <MainContainer>
        <MainHeading>
          Main -
          <Suspense fallback={<span> Fetching...</span>}>
            <Await resolve={data}>
              {(resolvedData) => <strong>{resolvedData}</strong>}
            </Await>
          </Suspense>
        </MainHeading>
      </MainContainer>
  );
};

async function loader() {
  return {
    data: delay("Fetched Data", 1000),
  };
}

export const mainRoute = {
  element: <Main />,
  loader,
};