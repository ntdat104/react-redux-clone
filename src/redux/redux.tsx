//* Một reducer sẽ nhận vào state, action và trả về một state mới
export type Reducer = (state: any, action: any) => any;

//* Hàm createStore sẽ nhận vào một reducer và trả về một store
export const createStore = (reducer: Reducer) => {
  //* Danh sách subscribers
  let listeners: Function[] = [];

  //* State - khởi tạo với giá trị mặc định là undefined
  let state = reducer(undefined, {});

  //* Hàm subscribe sẽ nhận vào một callback và thêm vào danh sách subscribers
  const subscribe = (listener: Function) => {
    listeners.push(listener);

    //* unsubscribe
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  };

  //* Hàm dispatch sẽ nhận vào một action và gọi tới reducer để cập nhật state
  const dispatch = (action: any) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  //* Hàm getState sẽ trả về state hiện tại
  const getState = () => state;

  return { subscribe, dispatch, getState };
};
