import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const style = {"layout":"vertical"};


// Custom component to wrap the PayPalButtons and handle currency changes
const PayaPalButtons = ({ currency, amount }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

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
                      console.log(data,actions)  
                    // Your code here after capture the order
                  });
              }}
          />
      </>
  );
}

export default PayaPalButtons