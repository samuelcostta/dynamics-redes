"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface ImageGalleryProps {
  images: string[];
  altPrefix?: string;
}

export default function ImageGallery({images, altPrefix = "Imagem"}: ImageGalleryProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      {/* Grid de imagens */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <button key={index} onClick={() => handleImageClick(index)} className="focus:outline-none">
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={400}
              height={300}
              className="rounded-xl object-cover w-full h-50 hover:scale-105 transition-transform"
            />
          </button>
        ))}
      </div>

      {/* Modal com Carousel */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-4">
          <Carousel
            opts={{ startIndex: selectedIndex }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-lg object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
