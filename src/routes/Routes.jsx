import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route,
  } from 'react-router-dom';

import { Header } from '../pages/header/header';
import { ProductWidget } from '../pages/products/product_widget/product_widget';
import { Layout } from '../components/layout/Layout';
import { About } from '../pages/about/about';
import { Contact } from '../pages/contact/contact';





export const Routes = () => {
  return (
    <BrowserRouter>  
        <Layout>
          <ReactDomRoutes>
            <Route path='/' element={<Header/>} />
            <Route path='products' element={<ProductWidget />}/> 
            <Route path='about' element={<About />}/> 
            <Route path='contact' element={<Contact />}/> 
            <Route path='*' element={<p>Error</p>} />
          </ReactDomRoutes>
        </Layout>
   </BrowserRouter>
  );
};
