import { Link } from 'gatsby';
import React, { useContext } from 'react';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';
import { CartContext } from '../context/CartContext';

import * as styles from './cart.module.css';

const CartPage = (props) => {
  const { items, removeFromCart, updateQuantity } = useContext(CartContext);
  const subtotal = items.reduce((sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1), 0);

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continue Shopping
                </span>
              </Link>
            </div>
            <Brand />
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Login</Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>My Bag</h3>
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {items.length === 0 ? (
                  <p className={styles.emptyMessage}>Your bag is empty.</p>
                ) : (
                  items.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      alt={item.alt}
                      name={item.name}
                      price={item.price}
                      color={item.color}
                      size={item.size}
                      quantity={item.quantity}
                      onRemove={removeFromCart}
                      onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                    />
                  ))
                )}
              </div>
              <OrderSummary subtotal={subtotal} />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
