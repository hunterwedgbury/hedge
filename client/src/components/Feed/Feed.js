import FeedItem from "./FeedItem";

const Feed = ({ posts, setPostsToDisplay }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <FeedItem
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              firstName={post.first_name}
              lastName={post.last_name}
              stock={post.stock}
              currentPrice={post.current_price}
              forecast={post.forecast}
              analysis={post.analysis}
            />
          </>
        );
      })}
    </>
  );
};

export default Feed;