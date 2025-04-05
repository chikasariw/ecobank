import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

export function ModalImage({ imagesrc }: { imagesrc: string }) {
  if (!imagesrc) {
    return <div className="text-red-500">Gambar tidak tersedia</div>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={imagesrc}
          alt="Thumbnail"
          width={500}
          height={500}
          unoptimized
          className="cursor-pointer rounded-lg w-14 h-14 object-contain"
        />
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center w-96 h-96 p-0 m-0 rounded-lg">
        <DialogTitle className="hidden">My Dialog Title</DialogTitle>
        <Image
          src={imagesrc}
          alt="Full Image"
          width={500}
          height={500}
          unoptimized
          className="w-96 h-96 object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
export default ModalImage;
