export const COLOURS ={
    while : '#ffffff',
    black : '#000000',
    blue : '#0043F9',
    backgroundLight : ' #F0F0F3',
    backgroundMedium:'B9B9B9',
    background: '777777',
}

export const Items =[
    {
        id:1,
        category:'product',
        productName:'AppleWatch_series7',
        productPrice:10000,        
        description:'qua dep luon',
        isoff:true,
        offPercentage:10,
        productImage:require('../database/images/products/a7_1.jpg'),
        isAvailable: true,
        productImageList:[
            require('../database/images/products/a7_1.jpg'),
            require('../database/images/products/a7_2.jpg'),
        ]

    },
    {
        id:2,
        category:'product',
        productName:'AppleWatch_series8',
        productPrice:15000,        
        description:'qua tuyet voi',
        isoff:false,
        productImage:require('../database/images/products/a8_1.jpg'),
        isAvailable: true,
        productImageList:[
            require('../database/images/products/a8_1.jpg'),
            require('../database/images/products/a8_2.jpg'),
        ]

    },
    {
        id: 3,
        category: 'accessory',
        productName: 'Applewatch_series3',
        productPrice: 1999,
        description:
          'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
        isOff: true,
        offPercentage: 18,
        productImage: require('../database/images/accessories/a3_1.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accessories/a3_1.jpg'),
          require('../database/images/accessories/a3_2.jpg'),
        ],
      },
      {
        id: 4,
        category: 'accessory',
        productName: 'Applewatch_series4',
        productPrice: 399,
        description:
          'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
        isOff: false,
        productImage: require('../database/images/accessories/a4_1.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accessories/a4_1.jpg'),
          require('../database/images/accessories/a4_2.jpg'),
        ],
      },
      {
        id: 5,
        category: 'accessory',
        productName: 'Applewatch_series5',
        productPrice: 1499,
        description:
          'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
        isOff: false,
        productImage: require('../database/images/accessories/a5_1.jpg'),
        isAvailable: false,
        productImageList: [
          require('../database/images/accessories/a5_1.jpg'),
          require('../database/images/accessories/a5_2.jpg'),
        ],
      },
      {
        id: 6,
        category: 'accessory',
        productName: 'Applewatch_series6',
        productPrice: 1299,
        description:
          'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
        isOff: false,
        productImage: require('../database/images/accessories/a6_1.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accessories/a6_1.jpg'),
          require('../database/images/accessories/a6_2.jpg'),
        ],
      },
]
