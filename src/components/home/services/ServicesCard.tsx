import Link from 'next/link';
import React from 'react';

const ServicesCard = () => {
  return (
        <div className="w-full md:w-1/3 p-4">
            <Link href="#">
                <div className="relative w-full max-w-md">
                    <div className="overflow-hidden rounded-2xl shadow-lg border border-primary">
                        <div className="bg-white p-4">
                            <img className="transform" src="/images/home/services/Document 3.svg" alt="Placeholder" />
                            <h2 className="text-xl font-sm py-4 font-medium">Article Writing</h2>
                            <p className="text-gray-700 text-sm py-5">Lörem ipsum polysam spetila
                                pyde. Trapolig regnbågsbarn
                                och beligt ehylig viktigt</p>
                            <img className="transform" src="/images/home/services/arrow.svg" alt="Placeholder" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  )
}

export default ServicesCard;