let calculator = {
  read(a, b) {
    this.firstNumber = a;
    this.secondNumber = b;
  },
  sum(a, b) {
    return this.firstNumber + this.secondNumber;
  },
  mul(a, b) {
    return this.firstNumber * this.secondNumber;
  },
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
