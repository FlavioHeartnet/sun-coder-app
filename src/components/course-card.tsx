import Image from "next/image";
import { Link } from "./ui/link";

export default function CourseCard({title = '', price='', image='/placeholder.svg', isPlanActive=false, path = '#'}){
    return(
        <div className="bg-[#222222] rounded-lg overflow-hidden">
        <Image
          alt="Course Image"
          className="w-full h-48 object-cover"
          height={216}
          src={image}
          style={{
            aspectRatio: "384/216",
            objectFit: "cover",
          }}
          width={384}
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{price}</p>
          { isPlanActive ? <Link variant='teal' href={path}>Assistir</Link>:<Link variant='teal' href={path}>Comprar</Link>}
        </div>
      </div> 
    );
}