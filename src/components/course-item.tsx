import Image from "next/image";
import { Link } from "./ui/link";

export default function CourseItem({title = '', price='', image='/placeholder.svg', isPlanActive=false}){
    return(
        <div className="flex-shrink-0 w-64">
                <Image
                  alt="Course Image"
                  className="rounded-lg mb-2"
                  height={144}
                  src={image}
                  style={{
                    aspectRatio: "256/144",
                    objectFit: "cover",
                  }}
                  width={256}
                />
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-gray-400 mb-2">{price}</p>
                { isPlanActive ? <Link variant='teal' href='/courses/javascript'>Assistir</Link>:<Link variant='teal' href='/courses/javascript'>Comprar</Link>}
                
              </div>
    );
}