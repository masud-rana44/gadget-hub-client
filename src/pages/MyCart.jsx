import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { redirect } from "react-router-dom";
import axios from "axios";

const MyCart = () => {
  const [items, setItems] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get(
        `http://localhost:8080/api/carts/${user.uid}`
      );
      const ids = res?.data?.data?.map((item) => item.productId);
      console.log(console.log(res?.data?.data));

      const data = await axios.post(
        "http://localhost:8080/api/carts/products",
        { ids }
      );
      console.log(data);
    };

    fetchItems();
  }, [user]);

  if (!user) {
    return redirect("/");
  }

  return <div>MyCart</div>;
};

export default MyCart;
