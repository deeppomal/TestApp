const books = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Apple Iphone X',
        amount:'$999',
        image:'https://images.unsplash.com/photo-1524293772845-840102eccb82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        quantity:1
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'OnePlus Node',
        amount:'$699',
        image:'https://images.unsplash.com/photo-1527747471697-174c755627dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        quantity:1
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Samsung Galaxy 10',
        amount:'$799',
        image:'https://images.unsplash.com/photo-1565967281697-91bfffdb3f37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        quantity:1
      },
   
    ];
    
    export const getProducts = () => {
        return books;
        
    }