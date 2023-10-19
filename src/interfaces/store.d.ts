export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
}

export interface IBuyOrder {
  employee: number | string;
  total: number;
}

export interface ISalesOrder {
  id: number;
  employee: number | string;
  total: number;
  cancelled: boolean;
  company: number | string;
  employee_name?: string;
}