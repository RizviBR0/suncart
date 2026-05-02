import React from 'react';
import { Button, Card, Chip } from "@heroui/react";
import Image from 'next/image';
import { HeartFill, ArrowDownToSquare } from '@gravity-ui/icons';
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const ProductCard = ({ item }) => {
    return (
        <Card key={item.id} className="flex flex-col rounded-2xl">
            <div className='relative'>
                <Image
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt={item.name}
                    aria-hidden="true"
                    className="object-top h-full w-full object-cover aspect-square rounded-lg"
                    src={item.image}
                    unoptimized
                />

                <Chip className='absolute top-2 right-2'>{item.category}</Chip>
            </div>

            <div className="z-10 flex flex-1 flex-col gap-3 bg-white">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8 line-clamp-1">{item.name}</Card.Title>
                    <Card.Description className='line-clamp-2'>
                        {item.description}
                    </Card.Description>
                    <Card.Footer className='flex-col'>
                        <div className='flex justify-between w-full mt-1'>
                            <span className='flex justify-center items-center gap-2 text-orange-500 font-bold text-xl'>${parseFloat(item.price).toFixed(2)}</span>
                            <span className='flex justify-center items-center gap-2'>
                                <FaStar className='text-yellow-400' />
                                {item.rating}
                            </span>
                        </div>
                        <Link className='w-full' href={`/products/${item.id}`}><Button className="w-full gap-0.5 mt-2 border border-orange-500 text-orange-500 hover:bg-orange-50" variant='outline'>View Details <MdKeyboardArrowRight /></Button></Link>
                    </Card.Footer>
                </Card.Header>
            </div>
        </Card>
    );
};

export default ProductCard;