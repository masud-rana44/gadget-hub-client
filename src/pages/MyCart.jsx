import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartItem } from "../components/CartItem";
import { Loader } from "../components/Loader";
import { EmptyState } from "../components/EmptyState";

const MyCart = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isLoading: isUserLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      axios.get(`http://localhost:8080/api/carts/${user.uid}`).then((res) => {
        const items = res?.data?.data;
        const ids = items.map((item) => item.productId);
        setItems([]);
        for (const id of ids) {
          axios.get(`http://localhost:8080/api/products/${id}`).then((res) => {
            setItems((items) => [...items, res?.data?.data]);
            setIsLoading(false);
          });
        }
        setIsLoading(false);
      });
    };

    user && fetchItems();
  }, [user]);

  if (!user) {
    return navigate("/");
  }

  if (isLoading || isUserLoading) return <Loader />;

  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - 80px - 377px)" }}
        className="max-w-2xl  container mx-auto px-4 md:px-0 mt-10 space-y-4"
      >
        {!!items.length &&
          items.map((item) => <CartItem key={item?._id} item={item} />)}
      </div>
      {!items.length && <EmptyState />}
    </>
  );
};

export default MyCart;
