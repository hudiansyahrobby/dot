import React from 'react';
import AlertMessage from '../../components/AlertMessage';
import Button from '../../components/Button';
import Cards from '../../components/Cards';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import Title from '../../components/Title';
import useMovies from '../../hooks/useMovies';

const HomePage = () => {
  const {
    data,
    error,
    isError,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <AlertMessage
        title={(error as any)?.response.data.message}
        status="error"
      />
    );
  }

  return (
    <Layout>
      <Title title="Movie List" />
      <div className="grid">
        {data?.pages.map((movies, index) => (
          <Cards movies={movies.results} key={data.pages[index]} />
        ))}
      </div>

      <div className="btn-center">
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {hasNextPage ? 'Load More' : 'Nothing more to load'}
        </Button>
      </div>
    </Layout>
  );
};

export default HomePage;
