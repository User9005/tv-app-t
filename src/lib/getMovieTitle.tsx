export const getMovieTitle = (title: string) => {
  const words = title.trim().split(" ");

  if (words.length === 1) {
    return (
      <span className="text-4xl font-bold">
        {words[0]}
      </span>
    );
  }

  const [firstWord, ...rest] = words;

  return (
    <>
      <span className="text-3xl font-medium">
        {firstWord}{" "}
      </span>
      <span className="text-4xl font-semibold">
        {rest.join(" ")}
      </span>
    </>
  );
};
