import { useEffect,  } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import{newCompra} from '../services/Sale'
import { useState } from "react";
import { Navigate } from "react-router-dom";

// This values are the props in the UI
const style = {"layout":"vertical"};


// Custom component to wrap the PayPalButtons and handle currency changes
const PayaPalButtons = ({ currency, amount, info }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
const [flag,Setflag] = useState(false)
const compra = async(info)=>{
    const data = await newCompra(info);
    localStorage.removeItem('items')
    Setflag(true)
    setTimeout(()=>{
        window.location.reload();
    },2000)
}  



  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency]);





  return (<>
        {flag?<Navigate to="/purchase" replace={true} />:null}  

          { ( isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                        console.log("orderid",orderId);
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                        compra(info)
                        
                    // Your code here after capture the order
                  });
              }}
          />
      </>
      
  );
}

export default PayaPalButtons