import { Slider } from "@material-tailwind/react";

export function SliderWithTicks() {
  return (
    <div className="w-80">
      <Slider>
        <Slider.Range />
        <Slider.Thumb />
        <Slider.Tick />
      </Slider>
    </div>
  );
}
