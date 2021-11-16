export default class User {
  private name: string;

  private email: string;

  /**
   *
   * @param name nome do usuário
   * @param email email do usuário
   */
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  teste1 = () => {
    console.log('Fun 1');
    this.teste2();
  }

  teste2 = () => {
    console.log('Fun 2');
  }

  /**
   *
   * @param message mensagem para o usuário
   */
  teste3(message: string): void {
    console.log(` Name: ${this.name} Message: ${message} Email:${this.email}`);
  }
}
