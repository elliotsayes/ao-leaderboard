import { Stage } from "@pixi/react";
import { Container, Sprite } from "@pixi/react-animated";
import { Spring } from "@react-spring/web";
import { PixiSvg } from "./PixiSvg";
import { Graphics, MaskData } from "pixi.js";
import { useMemo } from "react";

const getSvgPath = (graphicName: string) => `./assets/graphics/${graphicName}.svg`

const svgs = {
  "rays": getSvgPath("rays"),
  "moon": getSvgPath("moon"),
  "ario": getSvgPath("ar-io"),
  "sun": getSvgPath("sun"),
  "mushroom": getSvgPath("mushroom"),
  "stars": getSvgPath("stars"),
} as const;

const baseSize = {
  width: 54,
  height: 22,
  toggleDiameter: 20,
}

const qualityFactor = 4;

const targetValueMap = {
  false: {
    containerX: baseSize.height * 0.5,
    arioRotation: 0,
    arioAlpha: 1,
    sunRotation: -Math.PI,
    sunAlpha: 0,
  },
  true: {
    containerX: baseSize.height * 0.5 + baseSize.width * (1 - baseSize.height / baseSize.width),
    arioRotation: Math.PI,
    arioAlpha: 0,
    sunRotation: 0,
    sunAlpha: 1,
  },
};

interface ThemeToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  scale: number;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ value, onValueChange, scale }: ThemeToggleProps) => {
  const targetValues = targetValueMap[value ? "true" : "false"];
  
  const scaledSize = useMemo(() => ({
    width: baseSize.width * scale,
    height: baseSize.height * scale,
    toggleDiameter: baseSize.toggleDiameter * scale,
    offset: (baseSize.height - baseSize.toggleDiameter) * scale / 2,
  }), [scale]);

  const mask = useMemo(() => {
    return new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(0, 0, scaledSize.width, scaledSize.height, scaledSize.height / 2)
      .endFill() as unknown as MaskData;
  }, [scaledSize]);

  return (
    <button
      onClick={() => {
        console.log("clicked")
        onValueChange(!value)
      }}
    >
      <Stage
        width={scaledSize.width}
        height={scaledSize.height}
        options={{
          backgroundAlpha: 0,
          antialias: true,
          autoDensity: true,
          resolution: 2,
        }}
      >
        {/* Container for masking the background */}
        <Container
          width={scaledSize.width}
          height={scaledSize.height}
          scale={scale}
          mask={mask}
        >
          <Sprite
            image={"./assets/graphics/bg.png"}
            width={baseSize.width}
            height={baseSize.height}
          />
          <Spring
            to={targetValues}
          >
            {(springProps) => (
              <>
                <Sprite
                  image={"./assets/graphics/bg2.png"}
                  width={baseSize.width}
                  height={baseSize.height}
                  alpha={springProps.sunAlpha}
                />
                <PixiSvg
                  x={baseSize.width * 0.8}
                  y={baseSize.height * 0.5}
                  alpha={springProps.arioAlpha}
                  image={svgs["stars"]}
                  quality={qualityFactor * scale}
                  anchor={{x: 0.5, y: 0.5}}
                />
                <Container
                  y={baseSize.height * 0.5}
                  pivot={{x: baseSize.height / 2, y: baseSize.height / 2}}
                  x={springProps.containerX}
                >
                  <PixiSvg
                    rotation={springProps.arioRotation}
                    x={baseSize.height * 0.5}
                    y={baseSize.height * 0.5}
                    image={svgs["rays"]}
                    quality={qualityFactor * scale}
                    anchor={{x: 0.5, y: 0.5}}
                  />
                  <PixiSvg
                    x={baseSize.height * 0.5}
                    y={baseSize.height * 0.5}
                    image={svgs["moon"]}
                    quality={qualityFactor * scale}
                    anchor={{x: 0.5, y: 0.5}}
                  />
                  <PixiSvg
                    alpha={springProps.arioAlpha}
                    rotation={springProps.arioRotation}
                    x={baseSize.height * 0.5}
                    y={baseSize.height * 0.5}
                    image={svgs["ario"]}
                    quality={qualityFactor * scale}
                    anchor={{x: 0.5, y: 0.5}}
                  />
                </Container>
                <Container
                  alpha={springProps.sunAlpha}
                  rotation={springProps.sunRotation}
                  y={baseSize.height * 0.5}
                  x={springProps.containerX}
                  pivot={{x: baseSize.height / 2, y: baseSize.height / 2}}
                  anchor={{x: 0.5, y: 0.5}}
                >
                  <PixiSvg
                    x={baseSize.height * 0.5}
                    y={baseSize.height * 0.5}
                    image={svgs["sun"]}
                    quality={qualityFactor * scale}
                    // pivot={{x: -baseSize.height / 2, y: -baseSize.height / 2}}
                    anchor={{x: 0.5, y: 0.5}}
                  />
                  <PixiSvg
                    x={baseSize.height * 0.5}
                    y={baseSize.height * 0.5}
                    image={svgs["mushroom"]}
                    quality={qualityFactor * scale}
                    // pivot={{x: -baseSize.height / 2, y: -baseSize.height / 2}}
                    anchor={{x: 0.5, y: 0.5}}
                  />
                </Container>
              </>
            )}
          </Spring>
        </Container>
      </Stage>
    </button>
  )
}

export { ThemeToggle }
