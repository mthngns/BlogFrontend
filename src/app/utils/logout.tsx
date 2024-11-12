import { useDispatch } from 'react-redux';
import { resetUserState } from '@/redux/features/user/store/user';

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUserState());
  };

  return logout;
};

export default useLogout;
