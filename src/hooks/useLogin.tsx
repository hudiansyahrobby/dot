import { useMutation } from 'react-query';
import { useHistory } from 'react-router';
import { signin } from '../API/AuthAPI';

const useLogin = () => {
  const history = useHistory();
  return useMutation(signin, {
    onSuccess: () => {
      history.push('/');
    },
  });
};

export default useLogin;
