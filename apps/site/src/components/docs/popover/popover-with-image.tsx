import { Popover, Button, Typography } from "@material-tailwind/react";
import { NavArrowRight } from "iconoir-react";

export function PopoverWithImage() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>More Info</Popover.Trigger>
      <Popover.Content className="grid w-[30rem] grid-cols-2 gap-4">
        <div className="pl-1">
          <Typography color="default" className="mb-1 font-semibold">
            Material Tailwind
          </Typography>
          <Typography type="small" className="mb-4 block text-foreground">
            Material Tailwind is an easy to use components library for Tailwind
            CSS and Material Design. It features multiple React and HTML
            components, all written with Tailwind CSS classes and Material
            Design guidelines.
          </Typography>
          <Button as="a" href="#popover-with-image" size="sm">
            Read More
            <NavArrowRight className="ml-1.5 h-4 w-4 stroke-2" />
          </Button>
        </div>
        <img
          src="https://dub.sh/i2Y9t7g"
          alt="image"
          className="h-auto max-h-[220px] w-full rounded-[5px] object-cover"
        />
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
