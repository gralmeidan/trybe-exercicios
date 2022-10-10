import Client from './Client';
import Product from './Product';

export default class Order {
  public client: Client;
  public products: Product[];
  public pagamento: string;
  public desconto?: number;

  constructor(
    client: Client,
    products: Product[],
    pagamento: string,
    desconto?: number
  ) {
    this.client = client;
    this.products = products;
    this.pagamento = pagamento;
    this.desconto = desconto;
  }
}
