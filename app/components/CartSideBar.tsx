'use client';
import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

import CartItem from "./CartItem";
import { ScrollArea } from "./ui/scroll-area";
import CheckoutBtn from "./CheckoutBtn";

const CartSideBar = () => {
  const { cartCount, cartDetails, handleCartClick, totalPrice, shouldDisplayCart } = useShoppingCart();

  const itemCount = cartCount ?? 0;

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={handleCartClick}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-12">My Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        <>
          {itemCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h5 className="text-black/50">Your cart is empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
              {cartDetails && Object.entries(cartDetails).map(([key, item]) => {
                return <CartItem key={key} item={item} />;
              })}
            </ScrollArea>
          )}
        </>
        {itemCount > 0 && (
          <div>
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5">Total</div>
              <div className="text-lg">${totalPrice}</div>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
