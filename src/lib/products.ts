export type Product = {
  product_id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
};

export const products: Product[] = [
  {
    product_id: "pdt_0NUlGVB7NxOrR1InDq7EC",
    name: "Basic Plan",
    description: "Get access to basic features and support",
    price: 100, // in cents ($1.00)
    features: [
      "Access to basic features",
      "Email support",
      "1 Team member",
      "Basic analytics",
    ],
  },
  {
    product_id: "pdt_0NUlGXZKD0F89ILXZWAWd",
    name: "Premium Plan",
    description: "Get access to premium features and support",
    price: 200, // in cents ($2.00)
    features: [
      "Access to all features",
      "Priority 24/7 support",
      "Unlimited team members",
      "Advanced analytics",
      "Custom integrations",
    ],
  },
];
