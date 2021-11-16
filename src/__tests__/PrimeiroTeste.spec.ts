import { Login } from 'src/@types/Credentials';

test('Primeiro Teste', () => {
  expect(true).toEqual(true);
});

test('Valida Types', () => {
  const credentials: Login = {
    email: 'rodrigo',
    password: '123456',
  };

  expect(credentials.email).toEqual('rodrigo');
  expect(credentials.password).toEqual('123456');
});
