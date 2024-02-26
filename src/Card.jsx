import React from "react";
import {Card, CardHeader, Image} from "@nextui-org/react";
console.log(Card);

export default function App() {
  return (
    <div className="max-w-full gap-6 lg:gap-4 grid grid-cols-12 grid-rows-2 px-8 ">
    <Card className=" col-span-12 sm:col-span-4 h-[300px] hover:translate-x-1 hover:translate-y-1">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-large text-white uppercase font-bold">RETIREMENT PARTY</p>
        <h4 className="text-white font-medium text-small">Unleash the celebration</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="../public/retirement.jpg"
      />
      
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] hover:translate-x-1 hover:translate-y-1">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-large text-white uppercase font-bold">BABYSHOWER</p>
        <h4 className="text-white font-medium text-small">Tiny toes and giggles.</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="../public/babyshower.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] hover:translate-x-1 hover:translate-y-1">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-large text-white uppercase font-bold">ENGAGEMENT PARTY</p>
        <h4 className="text-white font-medium text-small">Remember tonight for it is the beginning of always.</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="../public/rings.jpg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 hover:translate-x-1 hover:translate-y-1">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-large text-white uppercase font-bold">BIRTHDAYS</p>
        <h4 className="text-white font-medium text-small">Cheers to you on your special day!</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="../public/birthdaycelebration.jpg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 hover:translate-x-1 hover:translate-y-1">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-large text-white uppercase font-bold">MARRIAGE</p>
        <h4 className="text-white/90 font-medium text-small">Building a lifetime of memories together.</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="../public/weddings.jpg"
      />
    </Card>  
  </div>
  );
}
