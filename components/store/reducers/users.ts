export const INCRESE = "COUNT/INCRESE";

export const increseCount = (count: any) => ({ type: INCRESE, count });

const initalState = {
  count: 0
};

const users = (state = initalState, action: { type: any; count: any; }) => {
  switch (action.type) {
    case INCRESE:
      return {
        ...state,
        count: action.count
      };

    default:
      return state;
  }
};

export {users}