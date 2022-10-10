enum MonthNames {
  Janeiro,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

export default class Data {
  public dia: number;
  public mes: number;
  public ano: number;

  constructor(dia: number, mes: number, ano: number) {
    if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || ano < 0) {
      (this.dia = 1), (this.mes = 1), (this.ano = 1900);
      return;
    }
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  getMonthName = () => MonthNames[this.mes - 1];

  isLeapYear = () => this.mes % 4 === 0;

  compare(data: Data) {
    const d1 = new Date(this.ano, this.mes - 1, this.dia);
    const d2 = new Date(data.ano, data.mes, data.dia);

    if (d1 === d2) return 0;
    if (d1 > d2) return 1;
    return -1;
  }

  format(format: string) {
    const { ano, dia, mes } = this;
    return format
      .replace('aaaa', String(ano).padStart(4, '0'))
      .replace('aa', String(ano).padStart(4, '0').substring(2, 4))
      .replace('mm', String(mes).padStart(2, '0'))
      .replace('M', this.getMonthName())
      .replace('dd', String(dia).padStart(2, '0'));
  }
}
