import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import routes from './routes/routes';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <>
    <RouterProvider router={routes} />
    <MessengerCustomerChat
    pageId="101069468425658"
    appId="190872909175329"
  />
    </>
  );
}

export default App;
