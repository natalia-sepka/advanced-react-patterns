import { Await, useAsyncValue, useLoaderData } from "react-router";
import { MainHeading } from "./styled-elements";
import { Suspense } from "react";
import delay from "../util/delay";

const Books = () => {
  const { bookCountPromise, authorsPromise } = useLoaderData();

  return (
    <div>
      <MainHeading>Books</MainHeading>
      <p>
        <strong>Available Books: </strong>
          <Suspense fallback={<span> Fetching...</span>}>
              <Await resolve={bookCountPromise}>
                  <BooksData />
              </Await>
          </Suspense>
      </p>
      <p>
        <strong>Authors:</strong>
          <Suspense fallback={<span> Fetching...</span>}>
              <Await resolve={authorsPromise}>
                  <AuthorsData />
              </Await>
          </Suspense>
      </p>
    </div>
  );
};

const AuthorsData = () => {
    const authors = useAsyncValue();
    return <strong>{authors}</strong>
}
const BooksData = () => {
    const books = useAsyncValue();
    return <strong>{books}</strong>
}

async function loader() {

  return {
    bookCountPromise: delay(10, 1000),
    authorsPromise: delay("Codelicks", 2000),
  };
}

export const booksRoute = { element: <Books />, loader };
