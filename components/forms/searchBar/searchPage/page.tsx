type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q;
  return (
    <div style={{ padding: "24px" }}>
      <h1>Search Results</h1>

      {query ? (
        <p>
          Results for: <strong>{query}</strong>
        </p>
      ) : (
        <p>You have not entered any phrase.</p>
      )}
    </div>
  );
}
