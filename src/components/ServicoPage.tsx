"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";

interface ServicoPageProps {
  titulo: string;
  descricao: string[];
  imagens: string[];
  videoUrl?: string;
  depoimentos?: { nome: string; texto: string }[];
  fichaTecnica?: { item: string; detalhe: string }[];
}

export default function ServicoPage({
  titulo,
  descricao,
  imagens,
  videoUrl,
  depoimentos,
  fichaTecnica,
}: ServicoPageProps) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{titulo}</h1>

      {descricao.map((paragrafo, i) => (
        <p key={i} className="mb-4 text-gray-700">{paragrafo}</p>
      ))}

      {videoUrl && (
        <video controls className="w-full rounded-xl mb-8">
          <source src={videoUrl} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      )}

      <h2 className="text-2xl font-semibold mb-4">Galeria de Imagens</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {imagens.map((src, index) => (
          <button key={index} onClick={() => handleImageClick(index)}>
            <Image src={src} alt={`Imagem ${index + 1}`} width={400} height={300} className="rounded-xl w-full h-60 object-cover" />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-4">
          <Carousel opts={{ startIndex: selectedIndex }} className="w-full">
            <CarouselContent>
              {imagens.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <Image src={src} alt={`Slide ${index + 1}`} width={600} height={400} className="rounded-lg object-contain" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>

      {fichaTecnica && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Ficha Técnica</h2>
          <table className="w-full mb-8 border text-sm">
            <thead>
              <tr>
                <th className="border px-4 py-2">Item</th>
                <th className="border px-4 py-2">Detalhe</th>
              </tr>
            </thead>
            <tbody>
              {fichaTecnica.map((linha, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{linha.item}</td>
                  <td className="border px-4 py-2">{linha.detalhe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {depoimentos && (
        <>
          <h2 className="text-2xl font-semibold mb-4">Depoimentos</h2>
          <div className="space-y-4">
            {depoimentos.map((d, i) => (
              <blockquote key={i} className="bg-gray-100 p-4 rounded-lg italic border-l-4 border-blue-600">
                “{d.texto}”
                <footer className="text-sm mt-2 text-gray-600">— {d.nome}</footer>
              </blockquote>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
