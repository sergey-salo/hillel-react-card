import React, { Component } from "react";
import Card from "./card";

const products = [
  {
    id: 282286938,
    tag: {
      name: "action",
      title: "Акція",
    },
    isInWishList: false,
    isInCompareList: false,
    title:
      "Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A) Charcoal Black / AMD Ryzen 5 5500U / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650",
    image: "https://content.rozetka.com.ua/goods/images/big_tile/163386254.jpg",
    pictogram: {
      title: "Величезний Великодній розпродаж",
      image: "https://content1.rozetka.com.ua/goods_tags/images_ua/original/324863508.png",
    },
    comments: {
      amount: 120,
      mark: 4.5,
    },
    price: 29999,
    oldPrice: 38999,
    isInCart: false,
    status: "active",
    sellStatus: "available",
  },
  {
    id: 326331199,
    tag: null,
    isInWishList: false,
    isInCompareList: false,
    title: "Ноутбук Lenovo IdeaPad 3 15ITL6 (82H800UKRA) Arctic Grey",
    image: "https://content1.rozetka.com.ua/goods/images/big_tile/236530650.jpg",
    pictogram: {
      title: "Безкоштовна доставка!",
      image: "https://content2.rozetka.com.ua/goods_tags/images_ua/original/296660158.png",
    },
    comments: {
      amount: 3,
      mark: 3.3,
    },
    price: 17999,
    oldPrice: 0,
    isInCart: false,
    status: "active",
    sellStatus: "available",
  },
  {
    id: 346065079,
    tag: {
      name: "action",
      title: "Акція",
    },
    isInWishList: false,
    isInCompareList: false,
    title:
      "Ноутбук Asus ROG Strix G15 G513IM-HN008 (90NR0522-M005M0) Eclipse Gray / AMD Ryzen 7 4800H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3060",
    image: "https://content.rozetka.com.ua/goods/images/big_tile/274286111.jpg",
    pictogram: null,
    comments: {
      amount: 91,
      mark: 2.4,
    },
    price: 49999,
    oldPrice: 57999,
    isInCart: false,
    status: "active",
    sellStatus: "available",
  },
  {
    id: 342592810,
    tag: {
      name: "action",
      title: "Акція",
    },
    isInWishList: true,
    isInCompareList: false,
    title:
      "Ноутбук ASUS Laptop X515EA-BQ1854 (90NB0TY2-M00EP0) Transparent Silver / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 256 ГБ",
    image: "https://content1.rozetka.com.ua/goods/images/big_tile/267775862.jpg",
    pictogram: null,
    comments: null,
    price: 15999,
    oldPrice: 18999,
    isInCart: false,
    status: "active",
    sellStatus: "available",
  },
  {
    id: 357063108,
    tag: {
      name: "action",
      title: "Акція",
    },
    isInWishList: false,
    isInCompareList: true,
    title:
      "Ноутбук ASUS Vivobook 15X OLED M1503IA-L1038 (90NB0Y61-M001E0) Quiet Blue / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ",
    image: "https://content1.rozetka.com.ua/goods/images/big_tile/292849253.jpg",
    pictogram: {
      title: "Величезний Великодній розпродаж",
      image: "https://content1.rozetka.com.ua/goods_tags/images_ua/original/324863508.png",
    },
    comments: {
      amount: 11,
      mark: 5,
    },
    price: 27999,
    oldPrice: 33999,
    isInCart: false,
    status: "inactive",
    sellStatus: "outOfStock",
  },
  {
    id: 288376303,
    tag: {
      name: "popularity",
      title: "Топ продажів",
    },
    isInWishList: false,
    isInCompareList: false,
    title:
      "Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black / AMD Ryzen 5 5500U / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650",
    image: "https://content2.rozetka.com.ua/goods/images/big_tile/175333147.jpg",
    pictogram: null,
    comments: {
      amount: 132,
      mark: 1.6,
    },
    price: 30999,
    oldPrice: 40999,
    isInCart: false,
    status: "inactive",
    sellStatus: "outOfStock",
  },
  {
    id: 326331198,
    tag: null,
    isInWishList: true,
    isInCompareList: true,
    title: 'Ноутбук Apple MacBook Air 13" M1 256GB 2020 (MGN63) Space Gray',
    image: "https://content1.rozetka.com.ua/goods/images/big_tile/144249716.jpg",
    pictogram: null,
    comments: {
      amount: 231,
      mark: 3,
    },
    price: 44499,
    oldPrice: 0,
    isInCart: false,
    status: "active",
    sellStatus: "limited",
  },
  {
    id: 362023689,
    tag: {
      name: "popularity",
      title: "Топ продажів",
    },
    isInWishList: false,
    isInCompareList: false,
    title:
      "Ноутбук ASUS TUF Gaming A15 FA506ICB-HN119 (90NR0667-M00KT0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050",
    image: "https://content1.rozetka.com.ua/goods/images/big_tile/302686477.jpg",
    pictogram: {
      title: "Безкоштовна доставка!",
      image: "https://content2.rozetka.com.ua/goods_tags/images_ua/original/296660158.png",
    },
    comments: {
      amount: 86,
      mark: 4.8,
    },
    price: 34999,
    oldPrice: 44999,
    isInCart: false,
    status: "inactive",
    sellStatus: "outOfStock",
  },
];

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = { products: [] };

    this.handleWishListClick = this.handleWishListClick.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ products });
    }, 2000);
  }

  handleWishListClick(productId) {
    this.setState((state) => {
      const { products } = state;

      return {
        products: products.map((item) =>
          item.id === productId ? { ...item, isInWishList: !item.isInWishList } : item,
        ),
      };
    });
  }

  handleCompareClick(productId) {
    this.setState((state) => {
      const { products } = state;

      return {
        products: products.map((item) =>
          item.id === productId ? { ...item, isInCompareList: !item.isInCompareList } : item,
        ),
      };
    });
  }

  handleAddToCartClick(productId) {
    this.setState((state) => {
      const { products } = state;

      return {
        products: products.map((item) => (item.id === productId ? { ...item, isInCart: !item.isInCart } : item)),
      };
    });
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map((product) => (
          <Card
            key={product.id}
            productData={product}
            onWishListClick={this.handleWishListClick}
            onCompareClick={this.handleCompareClick}
            onAddToCartClick={this.handleAddToCartClick}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
