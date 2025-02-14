import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

export function ModalImage({ src }: { src: string }) {
    if (!src) {
        return <div className="text-red-500">Gambar tidak tersedia</div>;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Image 
                    src={src} 
                    alt="Thumbnail" 
                    width={500} 
                    height={500} 
                    unoptimized
                    className="cursor-pointer rounded-lg w-14 h-14 object-cover"
                />
            </DialogTrigger>
            <DialogContent className="flex justify-center items-center w-96 h-96 p-0 m-0 rounded-lg">
                
                <DialogTitle className="hidden">My Dialog Title</DialogTitle>
                    <Image 
                        src={src} 
                        alt="Full Image" 
                        width={500} 
                        height={500} 
                        unoptimized
                        className="w-96 h-96 object-cover rounded-lg"
                    />
               
            </DialogContent>
        </Dialog>
    );
}
export default ModalImage;
