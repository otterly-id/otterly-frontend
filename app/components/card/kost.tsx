import { IconMapPin } from "@tabler/icons-react";

import { formatPrice } from "~/lib/utils";

import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter } from "../ui/card";

export interface KostCardProps {
  id?: string;
  imgSrc: string;
  name: string;
  price: number;
  location: string;
  features: string[];
  gender: "Man" | "Woman" | "Mixed";
}

export function KostCard({
  orientation,
  kost,
}: {
  orientation: "Vertical" | "Horizontal";
  kost: KostCardProps;
}) {
  if (orientation === "Vertical") {
    return (
      <Card className="w-full max-w-xs overflow-hidden rounded-lg shadow-none transition-all hover:shadow-sm">
        <div className="relative flex h-48 w-full items-center justify-center bg-gray-100">
          <img
            src={
              kost.imgSrc ||
              "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg"
            }
            alt={kost.name}
            width={200}
            height={500}
            className="h-full w-full object-cover"
          />
          <Badge
            variant="secondary"
            className="absolute top-2 left-2 rounded-md px-2 py-1 text-xs"
          >
            {kost.gender}
          </Badge>
        </div>
        <CardContent className="grid gap-2 p-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm dark:text-gray-400">
            <IconMapPin className="size-4" />
            <span>{kost.location}</span>
          </div>
          <h3 className="line-clamp-2 font-semibold text-lg">{kost.name}</h3>
          <div className="flex flex-wrap gap-1">
            {kost.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {kost.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                {`+${kost.features.length - 3}`}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between p-4 pt-0">
          <span className="font-bold text-primary text-xl">
            {formatPrice(kost.price)}
          </span>
        </CardFooter>
      </Card>
    );
  } else {
    return (
      <Card className="w-full flex-row gap-0 overflow-hidden rounded-lg p-0 shadow-none transition-all hover:shadow-sm">
        <img
          src={
            kost.imgSrc ||
            "https://g-mdfcdywyfqw.vusercontent.net/placeholder.svg"
          }
          alt={kost.name}
          width={200}
          height={200}
          className="h-fit w-[200px] object-cover"
        />
        <CardContent className="grid gap-4 p-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm dark:text-gray-400">
            <IconMapPin className="size-4" />
            <span>{kost.location}</span>
            <Badge variant="secondary">{kost.gender}</Badge>
          </div>
          <h3 className="line-clamp-2 font-semibold text-lg">{kost.name}</h3>
          <div className="flex flex-wrap gap-1">
            {kost.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {kost.features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                {`+${kost.features.length - 3}`}
              </Badge>
            )}
          </div>
          <span className="font-bold text-primary text-xl">
            {formatPrice(kost.price)}
          </span>
        </CardContent>
      </Card>
    );
  }
}
