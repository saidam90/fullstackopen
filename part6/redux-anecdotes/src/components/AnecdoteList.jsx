import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    if (state.filter === "ALL") {
      return state.anecdotes;
    }
    return state.filter === "IMPORTANT"
      ? state.anecdotes.filter((anecdote) => anecdote.important)
      : state.anecdotes.filter((anecdote) => !anecdote.important);
  });

  const dispatch = useDispatch();

  const handleVote = (id) => {
    dispatch(vote(id));
  };

  const orderedList = anecdotes.sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {orderedList.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
