import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { signup } from '../API/AuthAPI';

const useSignup = () => {
  const history = useHistory();
  return useMutation(signup, {
    onSuccess: () => {
      history.push('/login');
    },
  });
};

export default useSignup;
