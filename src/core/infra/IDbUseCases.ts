export type BillingData = {
    stripe_customer_id: string;
    plan_active: boolean;
}
export interface IDbUseCases {
    getBillingData(user_id:string): Promise<BillingData>;

}