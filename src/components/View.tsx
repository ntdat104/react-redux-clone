import { FC } from 'react';
import { useSelector } from '../redux/react-redux';

const View: FC = () => {
  const count = useSelector((state) => state.count);

  return <div>Count: {count}</div>;
};

export default View;
