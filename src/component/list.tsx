/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function List() {
  return (
    <div className="bg-grey">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (

            <div key={product.id} className="group relative">
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                 
                </CardHeader>
                <CardBody>
                  <h1>request virtual machine</h1>
                  <p className="text-sm font-medium text-gray-900">Windows 2019 datacenter</p>
                  <p className="text-sm font-medium text-gray-900">Centos8</p>
                  <p className="text-sm font-medium text-gray-900">Ubuntu12</p>
                  <p className="text-sm font-medium text-gray-900">Up to 30 VM</p>
                  <p className="text-sm font-medium text-gray-900">Vm Center Location</p>
                </CardBody>
                <CardFooter className="pt-0">
                </CardFooter>
              </Card>


            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
