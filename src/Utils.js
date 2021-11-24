export const getTimeString = swipeTime => {
  const datetime = new Date(swipeTime*1000);
  return datetime.toLocaleDateString() + ", " + datetime.toLocaleTimeString()
}

export const getURL = () => {
  // return "http://localhost:5000";
  return "https://swipemein.herokuapp.com";
}

export const sortBySwipeTime = swipeDatas => {
  return swipeDatas.sort((a, b) => a.swipeTime - b.swipeTime);
}

const compareSwipes = (a, b) => {
  if (a.swipeTime === b.swipeTime) {
    return a.price - b.price;
  }
  return a.swipeTime - b.swipeTime;
}

export const sortSwipes = swipeDatas => {
  return swipeDatas.sort((a,b) => compareSwipes(a,b));
}