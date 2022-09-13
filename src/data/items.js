import Item from '../models/Item';

// items data
const items = [
  new Item(
    1,
    'Hoodie 1',
    'https://images.unsplash.com/photo-1625024573124-57a3efa69d7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    29.99,
    'Red',
    'M',
    'hoodie',
    10
  ),
  new Item(
    2,
    'T-Shirt',
    'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    22.99,
    'White',
    'S',
    'T-shirt',
    14
  ),
  new Item(
    3,
    'Trouser',
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
    12.99,
    'Black',
    'L',
    'Trouser',
    8
  ),
  new Item(
    4,
    'Hoodie 2',
    'https://i.pinimg.com/564x/f3/79/c7/f379c7b1bbada5596b202a2916404654.jpg',
    18.99,
    'Green',
    'XL',
    'hoodie',
    12
  ),
  new Item(
    5,
    'Jacket',
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
    44.49,
    'Brown',
    'XL',
    'jacket',
    0
  ),
  new Item(
    6,
    'Pants ',
    'https://i.pinimg.com/564x/e0/c5/c7/e0c5c7aa0cd4edbae65d6ef17f10f0ca.jpg',
    12.99,
    'Black',
    'S',
    'pants',
    22
  ),
  new Item(
    7,
    'Jeans',
    'https://images.unsplash.com/photo-1628777807247-b789317442b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    12.99,
    'Blue',
    'M',
    'jeans',
    12
  ),
  new Item(
    8,
    'V Neck Shirt',
    'https://i.pinimg.com/564x/da/f2/fa/daf2fa0bab81b3eec4ca855f6ae35265.jpg',
    49.99,
    'Multicolor',
    'L',
    'V Neck Shirt',
    16
  ),
  new Item(
    9,
    'Crop Top',
    'https://i.pinimg.com/564x/06/02/d8/0602d843ba3a097bd00be111a5ddf28a.jpg',
    49.99,
    'Blue',
    'M',
    'Crop top',
    42
  ),
  new Item(
    10,
    'Wrap V Neck Top',
    'https://i.pinimg.com/564x/b1/50/74/b15074ef33443ee2387bb5a4a6b6fdb8.jpg',
    49.99,
    'Black',
    'XL',
    'Wrap V Neck Top',
    29
  ),
  new Item(
    11,
    'Formal Shirt',
    'https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    49.99,
    'Blue',
    'M',
    'shirt',
    19
  ),
  new Item(
    12,
    'Hoodie 3',
    'https://i.pinimg.com/564x/fa/0a/ea/fa0aea3bab3b041709133ced41800af3.jpg',
    49.99,
    'Black',
    'M',
    'hoodie',
    5
  ),
  new Item(
    13,
    'Hoodie 4',
    'https://i.pinimg.com/564x/64/f2/7e/64f27eaee668047b06873e5d2dc19c45.jpg',
    23.99,
    'Yellow',
    'L',
    'hoodie',
    3
  ),
  new Item(
    14,
    'Shirt 5',
    'https://images.unsplash.com/photo-1563389234808-52344934935c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    23.99,
    'Blue',
    'S',
    'shirt',
    27
  ),
  new Item(
    15,
    'Tie-dye Cropped Hoodie',
    'https://i.pinimg.com/564x/b0/de/b5/b0deb54eb7dbe257a28d474bb8a3f316.jpg',
    23.99,
    'Black',
    'XL',
    'cropped Hoodie',
    18
  ),
  new Item(
    16,
    'Front slit skirt',
    'https://i.pinimg.com/564x/d7/16/5e/d7165ee15ea61d54237ee13769926ae5.jpg',
    52.99,
    'Maroon',
    'L',
    'skirt',
    14
  ),
  new Item(
    17,
    'Denim Shorts',
    'https://i.pinimg.com/564x/75/cc/81/75cc8163ded8475a0244ed2c6e2ced8a.jpg',
    52.99,
    'Blue',
    'L',
    'Denim Shorts',
    21
  ),
  new Item(
    18,
    'Ribbed Tank Top ',
    'https://i.pinimg.com/564x/a5/10/28/a51028d3c1f1a8325aa7d5f702f44b6a.jpg',
    52.99,
    'Blue',
    'S',
    'Tank Top',
    5
  ),
  new Item(
    19,
    'Shirt',
    'https://images.unsplash.com/photo-1548864789-7393f2b4baa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
    19.99,
    'Maroon',
    'L',
    'shirt',
    13
  ),
  new Item(
    20,
    'Satin Cami Top',
    'https://i.pinimg.com/564x/0d/c7/66/0dc76684d5636c2415eeef713bff6c04.jpg',
    19.99,
    'Dark Green',
    'S',
    'Cami top',
    25
  ),
  new Item(
    21,
    'Oversized Tshirt',
    'https://i.pinimg.com/564x/67/14/f2/6714f29c3b91102add0def596d8c0f0e.jpg',
    19.99,
    'White',
    'XL',
    'Tshirt',
    43
  ),
];

export default items;
