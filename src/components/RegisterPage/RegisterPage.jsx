import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../Register2/RegisterTwo'
function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

    </div>
  );
}

export default RegisterPage;
