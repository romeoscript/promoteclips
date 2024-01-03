
import pkg from '@paypal/checkout-server-sdk';


const { core, orders } = pkg;


const clientId = 'ATvClt3Pxi6jP9ynUEe2Wc3XrUxPj6KA78Fm5sa2WGizOe7_FJlEmW1N9dX_VT_V6aDXw6ETUf3QGLwp';
const clientSecret = 'EKABKFVlU7fgBDhRMcfBMS4OBxbcPPdCUxo0Ct8XceJjwGovO3pFC8oFhdeZN_Zp10tmXypPnChEexdk';

let environment = new core.SandboxEnvironment(clientId, clientSecret);
let client = new core.PayPalHttpClient(environment);

const createPaypalOrder = async (req, res) => {
  const amount = req.body.amount;

  if (!amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }

  let request = new orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: amount.toString()
      }
    }],
    application_context: {
      return_url: 'http://localhost:3000/payment-success',
      cancel_url: 'http://localhost:3000/payment-cancelled'
    }
  });

  try {
    const order = await client.execute(request);
    res.json({ orderId: order.result.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createPaypalOrder };
