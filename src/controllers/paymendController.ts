import { Request, Response } from "express";

import Stripe from "stripe";

const stripe = new Stripe(`${process.env.SECRET_KEY}`);


export const createSubscription = async (req: Request, res: Response) => {
    try {
        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
              {
                price: `price_1OA1etAKuedb3a7QdTmWNC7g`,
                quantity: 1,
              },
            ],
          });

          res.status(200).json({ url: paymentLink.url })
          
  
    } catch (error) {
      console.log(`${process.env.SECRET_KEY}`);
      res.status(500).json({ msg: { error } });
    }
  }

export const captureSubscription = async (req: Request, res: Response) => {

    
    console.log('llego');
    res.send({msg:'succes'})


};


export const cancelSubcription = (req: Request, res: Response) => {

    res.redirect('/');

};






