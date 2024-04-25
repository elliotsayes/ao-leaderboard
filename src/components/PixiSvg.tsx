import { Sprite } from "@pixi/react-animated";
import { Texture } from "pixi.js";
import type React from "react";
import { useEffect, useState } from "react";

interface PixiSvgProps extends React.ComponentProps<typeof Sprite> {
  quality: number;
}

const PixiSvg: React.FC<PixiSvgProps> = (
	props: PixiSvgProps,
) => {
	const { quality, image, ...namedAvatarProps } = props;

	const [texture, setTexture] = useState<Texture | null>(null);
	useEffect(() => {
		if (image) {
			setTexture(
				Texture.from(image as string, {
          resolution: quality,
          resourceOptions: {
            scale: quality,
            // resourceScale: quality,
          },
        }),
			);
		}
	}, [image, quality]);

	if (!texture) {
		return null;
	}

	return (
    <Sprite
      texture={texture}
      {...namedAvatarProps}
    />
	);
};

export { PixiSvg };
