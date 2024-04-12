import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function getProductbyId(id: string){
    const resp = await fetch('https://api.stripe.com/v1/products/'+id, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+process.env.STRIPE_SECRET_KEY
                  },
                })

            const product = await resp.json();
            return {
                name: product.name,
                description: product.description,
            } 
}

export async function getPricebySub(sub_id: string){
    const priceResp = await fetch('https://api.stripe.com/v1/subscriptions/'+sub_id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+process.env.STRIPE_SECRET_KEY
        },
      })

      if(priceResp.status === 200){
        const priceData = await priceResp.json();
        return {
            priceId: priceData.items.data[0].price.id,
            productId: priceData.items.data[0].price.product,
        }
      }
      return
}