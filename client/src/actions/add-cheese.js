export const POST_CHEESE_REQUEST = 'POST_CHEESE_REQUEST';
const postCheeseRequest = () => ({
  type: POST_CHEESE_REQUEST
});

export const POST_CHEESE_SUCCESS = 'POST_CHEESE_SUCCESS';
const postCheeseSuccess = (cheese) => ({
  type: POST_CHEESE_SUCCESS,
  cheese
});

export const POST_CHEESE_ERROR = 'POST_CHEESE_ERROR';
const postCheesesError = (message) => ({
  type: POST_CHEESE_ERROR,
});

export const postCheese = (inputBody) => {
  return (dispatch) => {
    dispatch(postCheeseRequest())

    setTimeout(() => {
      fetch('/api/cheeses')
      // .then(response => response.json())
      // .then(cheeses => dispatch(postCheeseSuccess(cheeses)))
      // .catch(err => dispatch(postCheesesError(err.message)))
    }, 2000)
  }
}